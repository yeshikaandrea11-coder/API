from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


# CORS: La API debe aceptar que le estoy haciendo una petición en ese sitio
# O sea Habilita peticiones desde clientes que no están en mi dominio
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods = ["*"],
    allow_headers=["*"]
)
@app.get("/sumar")
def sumar_números(a:float, b:float):
    return a+b



