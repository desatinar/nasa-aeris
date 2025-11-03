from pydantic import BaseModel
from typing import Optional

class AirQualityResponse(BaseModel):
    """Esquema de resposta para dados de qualidade do ar em tempo real."""
    latitude: float
    longitude: float
    aqi: int               
    main_pollutant: str    
    advice: str            
    pm25: Optional[float] = None
    o3: Optional[float] = None
    pm10: Optional[float] = None