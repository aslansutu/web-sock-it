# Web Sock It

## Purpose

The purpose of this to create a simple chat application
that utilizes FastAPI and secure web sockets.

# Initialize

Create your own certificates for local development

https://github.com/FiloSottile/mkcert


# Run

For local development, navigate to the folder where your server is located and run

```uvicorn server:app --reload --ssl-keyfile=key.pem --ssl-certfile=cert.pem```