from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os


load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env')) 

class Settings(BaseSettings):
    """Define o esquema de configuração, lendo do ambiente (ou .env)."""
    OPENWEATHER_API_KEY: str

settings = Settings()