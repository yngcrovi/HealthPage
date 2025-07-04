from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from fastapi_cache import FastAPICache
# from fastapi_cache.backends.redis import RedisBackend
# from redis import asyncio as aioredis
from src.endpoint.sport.add_training import route as add_training
# from src.redis.redis import redis
from src.endpoint.auth.registratoin import route as registration
from src.endpoint.auth.login_out import route as login_out
from src.endpoint.user.param_user import route as param_user
from src.endpoint.auth.token import route as token
from src.endpoint.sport.params import route as sport_params
from src.log.log import get_logger

logger = get_logger('endpoint')

app = FastAPI()

origins = [
    'http://localhost:3000',
    'http://127.0.0.1:8000',
    'https://weak-dancers-sneeze.loca.lt'
]

# @app.on_event("startup")
# async def startup_event():
#     Redis()
    # FastAPICache.init(RedisBackend(redis))

# @app.on_event("shutdown")
# async def shutdown_event():
#     await redis.close_connection()

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)

app.include_router(add_training)
app.include_router(registration)
app.include_router(login_out)
app.include_router(param_user)
app.include_router(token)
app.include_router(sport_params)

if __name__ == '__main__':
    from uvicorn import run
    run("main:app", host="127.0.0.1", port=8000, reload=True)

