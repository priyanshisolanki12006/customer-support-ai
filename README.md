# Multi-Agent AI Customer Support Assistant

An enterprise-level AI-powered customer support system that uses **Multi-Agent Architecture**, **Retrieval-Augmented Generation (RAG)**, **Vector Databases**, and **Large Language Models (LLMs)** to provide intelligent customer support.

---

## 📌 Project Objective

The objective of this project is to develop a web-based customer support platform capable of:

* Understanding customer intent
* Routing queries to specialized AI agents
* Retrieving information from company documents
* Generating accurate responses using LLMs
* Maintaining conversation history
* Escalating unresolved customer issues

This project simulates a real-world AI customer support system used by modern enterprises.

---

# 🚀 Features

### Authentication

* User Registration
* User Login
* Session Management
* JWT Authentication

### AI Chat Interface

* Real-time Chat Window
* Conversation History
* Typing Indicator
* Multi-session Support

### Intent Detection

Automatically classifies customer queries into:

* Billing
* Refund
* Technical Support
* Product Information
* Complaints
* General FAQ

### Multi-Agent System

#### Billing Agent

Handles:

* Payments
* Subscription Issues
* Invoices
* Refunds

#### Technical Support Agent

Handles:

* Login Problems
* Password Reset
* Installation Issues
* Bugs and Errors

#### Product Agent

Handles:

* Product Features
* Pricing Information
* Product Comparison
* Availability

#### Complaint Agent

Handles:

* Customer Complaints
* Escalations
* Customer Dissatisfaction

#### FAQ Agent

Handles:

* Company Policies
* General Questions
* Contact Information

### Retrieval-Augmented Generation (RAG)

* PDF Knowledge Base
* Semantic Search
* Vector Embeddings
* Context-Aware Response Generation

### Conversation Memory

Stores:

* User Messages
* AI Responses
* Session IDs
* Timestamps

### Escalation System

Unresolved issues can be escalated to human support.

---

# 🏗 System Architecture

```text
Customer
    ↓
Frontend Chat Interface
    ↓
FastAPI Backend
    ↓
Intent Detection Agent
    ↓
Agent Router
    ↓
Specialized AI Agents
    ↓
RAG Retrieval System
    ↓
Vector Database (FAISS)
    ↓
Gemini LLM
    ↓
Final Response
```

---

# 📂 Project Structure

```text
customer-support-ai/
│
├── backend/
│
├── frontend/
│
├── knowledge_base/
│
├── datasets/
│
├── documentation/
│
├── README.md
└── .gitignore
```

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Next.js
* Tailwind CSS
* Axios

## Backend

* FastAPI
* Python 3.11+
* MongoDB
* JWT Authentication

## AI & Machine Learning

* Google Gemini API
* LangChain
* Sentence Transformers
* FAISS Vector Database
* RAG Pipeline

## Database

* MongoDB Atlas

## Deployment

* Vercel (Frontend)
* Railway / Render (Backend)
* MongoDB Atlas

---

# 🧠 AI Concepts Used

* Multi-Agent Systems
* Retrieval-Augmented Generation (RAG)
* Vector Embeddings
* Semantic Search
* Large Language Models
* Conversation Memory
* Intent Classification
* Agent Routing

---

# 📚 Knowledge Base Documents

The system uses company documents for semantic retrieval:

```text
knowledge_base/
│
├── FAQ.pdf
├── RefundPolicy.pdf
├── ShippingPolicy.pdf
├── Warranty.pdf
├── Pricing.pdf
├── Products.pdf
├── InstallationGuide.pdf
└── UserManual.pdf
```

---

# 📦 Installation

## 1. Clone Repository

```bash
git clone https://github.com/priyanshisolanki12006/customer-support-ai.git
cd customer-support-ai
```

---

## 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Run Backend:

```bash
uvicorn main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

---

## 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:3000
```

---

# 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```env
GOOGLE_API_KEY=your_gemini_api_key

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

DATABASE_NAME=customer_support_ai
```

---

# 🛠 API Endpoints

## Authentication

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| POST   | /register | Register User |
| POST   | /login    | Login User    |

---

## Chat

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| POST   | /chat    | Send Message     |
| GET    | /history | Get Chat History |

---

## Health

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| GET    | /health  | Check API Status |

---

# 🔄 RAG Workflow

```text
Company Documents
        ↓
Document Chunking
        ↓
Generate Embeddings
        ↓
Store in FAISS
        ↓
User Query
        ↓
Retrieve Relevant Chunks
        ↓
Send Context to Gemini
        ↓
Generate Response
```

---

# 📊 Future Enhancements

* Voice-enabled Customer Support
* Multilingual Conversations
* Sentiment Analysis
* WhatsApp Integration
* Email Integration
* Automatic Ticket Creation
* Human Agent Handoff
* Admin Dashboard
* Analytics Dashboard
* Customer Satisfaction Monitoring

---

# 🧪 Testing

The system should be tested for:

* Agent Routing Accuracy
* Retrieval Quality
* Response Time
* Edge Cases
* Authentication Security
* Multi-turn Conversations

---

# 📈 Evaluation Criteria

| Component                  | Marks |
| -------------------------- | ----- |
| Frontend Design            | 10    |
| Backend APIs               | 15    |
| Multi-Agent Architecture   | 20    |
| RAG Implementation         | 20    |
| LLM Integration            | 15    |
| Database Design            | 10    |
| Documentation & Deployment | 10    |

---

# 👨‍💻 Developed By

**Priyanshi Solanki**

B.Tech Project

Multi-Agent AI Customer Support Assistant using RAG and LLMs.

---

# 📄 License

This project is developed for educational and academic purposes.
