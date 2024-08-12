import { StreamingTextResponse, LangChainStream, Message } from "ai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AIMessage, HumanMessage } from "langchain/schema";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const currentMessageContent = messages[messages.length - 1].content;

  const vectorSearch = await fetch("http://localhost:3000/api/vectorSearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: currentMessageContent,
  }).then((res) => res.json());

  const TEMPLATE = `
  You are a highly knowledgeable and enthusiastic customer support representative for Azuro,
  a company specializing in insurance services. Your goal is to assist customers by providing
  clear and accurate information based on the available documentation. Please answer the 
  question using only the information provided in the documentation, formatted in markdown. 
  If the answer is not explicitly available in the documentation, respond with 
  "Sorry, I don't know how to help with that."
  
  Context sections:
  ${JSON.stringify(vectorSearch)}
  
  Question: """
  ${currentMessageContent}
  """
  `;

  messages[messages.length -1].content = TEMPLATE;

  const { stream, handlers } = LangChainStream();

  const llm = new ChatOpenAI({
    modelName: "gpt-3.5-turbo",
    streaming: true,
  });

  llm
    .call(
      (messages as Message[]).map((m) =>
        m.role == "user"
          ? new HumanMessage(m.content)
          : new AIMessage(m.content)
      ),
      {},
      [handlers]
    )
    .catch(console.error);

  return new StreamingTextResponse(stream);
}
