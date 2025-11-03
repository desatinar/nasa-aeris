

from fastapi import APIRouter, HTTPException 
from ..schemas.air_quality_schema import AirQualityResponse
from ..services.openaq_service import fetch_air_quality, process_openaq_data 

router = APIRouter(
    prefix="/api/air-quality",
    tags=["Air Quality"]
)

@router.get("/realtime/{lat}/{lon}", response_model=AirQualityResponse)
async def get_realtime_data(lat: float, lon: float):
    
    raw_owm_data = await fetch_air_quality(lat, lon)
    
    if raw_owm_data is None:
        # Retorna o erro se a API não retornar dados (Ainda pode ser 401, 404, etc.)
        raise HTTPException(
            status_code=404, 
            detail="Não foi possível obter os dados. A chave de API pode estar inativa ou a localização não tem cobertura."
        )

    final_data = process_openaq_data(raw_owm_data, lat, lon)
    
    return final_data

