import httpx
from typing import Dict, Any, Optional
from ..config import settings 


OPENWEATHER_URL = "https://api.openweathermap.org/data/2.5/air_pollution" 
API_KEY = settings.OPENWEATHER_API_KEY 


async def fetch_air_quality(lat: float, lon: float) -> Optional[Dict[str, Any]]:
    params = {
        "lat": lat,
        "lon": lon,
        "appid": API_KEY 
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(OPENWEATHER_URL, params=params)
            response.raise_for_status() 

        data = response.json()
        
        if data.get("list"):
            return data["list"][0]
        
        return None 
    
    except Exception as e:
       
        print(f"Erro ao conectar com OWM: {e}") 
        return None


# --- FUNÇÃO AUXILIAR: PROCESSAR OS DADOS ---
def process_openaq_data(raw_data: Dict[str, Any], lat: float, lon: float) -> Dict[str, Any]:
    aqi_owm = raw_data.get("main", {}).get("aqi", 0)
    components = raw_data.get("components", {})
    
    aqi_map = {1: 30, 2: 65, 3: 120, 4: 170, 5: 250}
    aqi = aqi_map.get(aqi_owm, 0)

    if aqi <= 50:
        advice = "Qualidade do ar excelente para todas as atividades."
    elif aqi <= 100:
        advice = "Ar moderado. Pessoas sensíveis devem limitar o tempo ao ar livre."
    else:
        advice = "Qualidade do ar insalubre! Evite atividades ao ar livre."
        
    main_pollutant = "N/A"
    if components.get("pm2_5", 0) > 0:
        main_pollutant = "PM2.5"

    return {
        "latitude": lat,
        "longitude": lon,
        "aqi": aqi,
        "main_pollutant": main_pollutant,
        "advice": advice,
        "pm25": components.get("pm2_5"),
        "o3": components.get("o3"),
        "pm10": components.get("pm10")
    }