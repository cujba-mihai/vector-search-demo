import { OpenAIEmbeddings } from "@langchain/openai";
import mongoClientPromise from '@/app/lib/mongodb';
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";

export async function POST(req: Request) {
    const client = await mongoClientPromise;
    const dbName = "docs";
    const collectionName = "embeddings";
    const collection = client.db(dbName).collection(collectionName);

    const dbConfig = {  
        collection: collection,
        indexName: "vector_index", // The name of the Atlas search index to use.
        textKey: "text", // Field name for the raw text content. Defaults to "text".
        embeddingKey: "embedding", // Field name for the vector embeddings. Defaults to "embedding".
      };
      const vectorStore = new MongoDBAtlasVectorSearch(
        new OpenAIEmbeddings({
          stripNewLines: true,
        }), dbConfig);
        
      const question = await req.text();
      const retriever = await vectorStore.asRetriever({
        searchType: "mmr",
        searchKwargs: {
          fetchK: 20,
          lambda: 0.1,
        },
      });

    const retrievedResults = await retriever.invoke(question);

    console.log(JSON.stringify(retrievedResults, null, 2))
  
    return Response.json(retrievedResults);
}