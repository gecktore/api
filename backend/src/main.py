from fastapi import FastAPI
from src.router import router as router_crypto

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.include_router(router_crypto)


list = ["http://localhost:5173",
        "http://127.0.0.1:5173"
        'http://192.168.1.3:29009',
        'http://192.168.1.3:29010',
        'http://192.168.1.3:30102',
        'http://192.168.1.3:30103',
        'http://192.168.1.3:44001',
        'http://192.168.1.3:45479',
        'http://192.168.1.3:46888',
]

app.add_middleware(
  CORSMiddleware,
  allow_origins = list,
  allow_credentials = True,
  allow_methods = ["*"],
  allow_headers = ["*"]
)