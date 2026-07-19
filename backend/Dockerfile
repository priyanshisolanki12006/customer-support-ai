FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV PORT=8000

# Shell form so $PORT is expanded at runtime — hosting platforms assign it.
CMD python -m uvicorn main:app --host 0.0.0.0 --port $PORT
