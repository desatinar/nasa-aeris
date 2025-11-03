from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import air_quality

app = FastAPI(
    title="Aeris NASA Space Apps API",
    version="1.0.0"
)


origins = [
    "http://localhost:5173",  
    "http://127.0.0.1:5173",
    "https://nasa-aeris.vercel.app", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)



app.include_router(air_quality.router)

@app.get("/", tags=["Health Check"])
def read_root():
    """Endpoint simples para verificar se a API está online."""
    return {"message": "API Aeris está funcionando!"}