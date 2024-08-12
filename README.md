# Workshop Demo Application

- Prerequisites
    - Node.js v18 or later 

# [Retrieval-Augmented Generation](https://mihai-cujba-indrivo.notion.site/1e9290ac75b8494da4460c06d9a51e12?v=348e3816f6a3448295caf95c52ad2d0b)

RAG stands for retrieval augmented generation. In simple terms, RAG is the process of providing a Large Language Model (LLM) with specific information relevant to the prompt.

[🍃 MongoDB Atlas](https://mihai-cujba-indrivo.notion.site/MongoDB-Atlas-d10c5d793dd74f039811e3107facea84)

[**🤖 OpenAI**](https://mihai-cujba-indrivo.notion.site/OpenAI-af39d872a2044e9f9a0b7db8aada187d)

[**⚙️ Application Setup**](https://mihai-cujba-indrivo.notion.site/Application-Setup-fdc3f6b67324468289f3a11e95134797)

[**🔎 Full Text Search**](https://mihai-cujba-indrivo.notion.site/Full-Text-Search-54f97a711c0641fbb9be66b87b69852b)

[**↗️ Vector Search**](https://mihai-cujba-indrivo.notion.site/Vector-Search-c93323c6c1ee48aa804af034d5f01d1a)

[**🎯 Summary**](https://mihai-cujba-indrivo.notion.site/Summary-4cda04bb5a504bc48a150df3f1435fb1)


## **Installing Node.js 18 or Later**

### **Windows**

1. **Download the Installer:**
   - Go to the official [Node.js website](https://nodejs.org/en/).
   - Choose the LTS (Long-Term Support) version, which should be version 18 or later.
   - Download the Windows installer (`.msi`).

2. **Run the Installer:**
   - Open the downloaded `.msi` file.
   - Follow the prompts in the Node.js Setup Wizard.
   - Make sure to check the box that says “Automatically install the necessary tools” to install additional tools like Python and C++ Build Tools.

3. **Verify the Installation:**
   - Open Command Prompt.
   - Type the following command to verify the installation:
     ```bash
     node -v
     ```
   - You should see the version number of Node.js installed, e.g., `v18.x.x`.

### **Linux**

#### **Option 1: Using NodeSource Repository**

1. **Add the NodeSource Repository:**
   - For Ubuntu/Debian-based distributions:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
     ```
   - For RHEL/Fedora-based distributions:
     ```bash
     curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
     ```

2. **Install Node.js:**
   - After adding the repository, install Node.js with:
     ```bash
     sudo apt-get install -y nodejs  # For Ubuntu/Debian
     sudo dnf install -y nodejs      # For RHEL/Fedora
     ```

3. **Verify the Installation:**
   - Check the installed version by running:
     ```bash
     node -v
     ```

#### **Option 2: Using nvm (Node Version Manager)**

1. **Install nvm:**
   - Use the following command to install `nvm`:
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
     ```
   - Close and reopen your terminal, or run:
     ```bash
     source ~/.bashrc
     ```

2. **Install Node.js Using nvm:**
   - To install Node.js 18:
     ```bash
     nvm install 18
     ```

3. **Set Node.js 18 as Default:**
   - Set Node.js 18 as the default version:
     ```bash
     nvm use 18
     nvm alias default 18
     ```

4. **Verify the Installation:**
   - Verify the installation:
     ```bash
     node -v
     ```

### **macOS**

#### **Option 1: Using Homebrew**

1. **Install Homebrew (if not already installed):**
   - Run the following command in Terminal:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

2. **Install Node.js:**
   - Install Node.js 18 using Homebrew:
     ```bash
     brew install node@18
     ```

3. **Verify the Installation:**
   - Check the version of Node.js:
     ```bash
     node -v
     ```

#### **Option 2: Using nvm**

1. **Install nvm:**
   - Install `nvm` by running:
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
     ```
   - Close and reopen your terminal, or run:
     ```bash
     source ~/.bashrc
     ```

2. **Install Node.js Using nvm:**
   - To install Node.js 18:
     ```bash
     nvm install 18
     ```

3. **Set Node.js 18 as Default:**
   - Set Node.js 18 as the default version:
     ```bash
     nvm use 18
     nvm alias default 18
     ```

4. **Verify the Installation:**
   - Verify the installation:
     ```bash
     node -v
     ```