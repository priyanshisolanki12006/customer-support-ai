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
* Per-browser session ids for chat history

> ⚠️ Authentication is demo-grade. Passwords are stored in plaintext and no
> JWT is issued — see [Known Limitations](#-known-limitations).

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
* Python 3.12
* MongoDB

## AI & Machine Learning

* Google Gemini API (`gemini-3.5-flash`) for generation
* Google `gemini-embedding-001` for embeddings
* LangChain
* FAISS Vector Database
* RAG Pipeline

> Embeddings are generated through the Gemini API rather than a local
> Sentence Transformers model. This keeps the deployed image around 150 MB
> instead of ~2.5 GB, which is what allows it to run on a free tier.

## Database

* MongoDB Atlas

## Deployment

* Vercel (Frontend)
* Render (Backend)
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
├── Warranty .pdf
├── Pricing.pdf
├── Products .pdf
├── InstallationGuide.pdf
├── UserManual.pdf
└── TechMartElectronicsCompanyInformation.pdf
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
python -m venv venv
venv\Scripts\activate        # macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env         # then fill in your keys
```

Run Backend:

```bash
uvicorn main:app --reload
```

Backend runs on `http://localhost:8000`.

---

## 3. Frontend Setup

```bash
cd frontend
npm install
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
npm run dev
```

Frontend URL:

```text
http://localhost:3000
```

---

## 4. Rebuilding the Vector Index

`backend/faiss_index/` is committed so deployments do not re-embed on boot.
Rebuild it only when the PDFs in `knowledge_base/` change:

```bash
cd backend
python -m rag.document_loader
```

Commit the regenerated `index.faiss` and `index.pkl` afterwards.

---

# 🔐 Environment Variables

Create a `.env` file inside the backend folder (see `backend/.env.example`).

```env
GOOGLE_API_KEY=your_gemini_api_key

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

DATABASE_NAME=customer_support_ai

ALLOWED_ORIGINS=http://localhost:3000
```

`ALLOWED_ORIGINS` is a comma separated list of browser origins permitted to
call the API. In production this must include the deployed frontend URL, or
the browser will block every request.

The frontend needs one variable, in `frontend/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
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

| Method | Endpoint                      | Description                    |
| ------ | ----------------------------- | ------------------------------ |
| POST   | /chat                         | Send Message                   |
| GET    | /history?session_id=…         | Get Chat History for a session |
| DELETE | /history?session_id=…         | Clear History for a session    |

Omitting `session_id` operates on **every** session — see Known Limitations.

---

## Dashboard

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | /dashboard/stats | Chat, user and doc counts |

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

# 🚢 Deployment (Free Tier)

## Backend → Render

1. Push this repository to GitHub.
2. On [render.com](https://render.com), **New → Web Service**, connect the repo.
   Render reads `render.yaml`, so the build and start commands are already set.
3. Add the environment variables when prompted:
   * `GOOGLE_API_KEY`
   * `MONGO_URI`
   * `ALLOWED_ORIGINS` — set to your Vercel URL once step 2 of the frontend
     is done (e.g. `https://your-app.vercel.app`)
4. Deploy, then confirm `https://<service>.onrender.com/health` returns
   `{"status":"ok"}`.

> The free instance sleeps after ~15 minutes of inactivity, so the first
> request after a lull takes roughly 30 seconds to wake.

## Frontend → Vercel

1. On [vercel.com](https://vercel.com), **Add New → Project**, import the repo.
2. Set **Root Directory** to `frontend`.
3. Add environment variable `NEXT_PUBLIC_API_URL` = your Render URL
   (no trailing slash).
4. Deploy.

## Finally

Go back to Render and set `ALLOWED_ORIGINS` to the Vercel URL, then redeploy.
Without this the browser blocks every API call with a CORS error.

## MongoDB Atlas

The free M0 cluster is sufficient. Under **Network Access**, Render's
outbound IPs are not static, so allow `0.0.0.0/0` and rely on the connection
string credentials.

---

# ⚠️ Known Limitations

These are deliberate scope choices for an academic build, not oversights:

* **Passwords are stored in plaintext** and compared directly. Hash them with
  `bcrypt` before any real user touches this.
* **No JWT is issued.** `JWT_SECRET` is configured but unused; the frontend
  "login" only sets a `localStorage` flag, which any user can set themselves.
* **`session_id` is not authenticated.** The API trusts whatever id the client
  sends, so history is separated for convenience, not security. Calling
  `/history` with no `session_id` returns every conversation in the database.
* **`langchain-community` is deprecated** upstream. It is pinned and working,
  but a future refactor should move to the standalone integration packages.

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
