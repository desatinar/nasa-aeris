export const getAQILevel = (aqi) => {
    if (aqi <= 50) return 'Bom';
    if (aqi <= 100) return 'Moderado';
    if (aqi <= 150) return 'Insalubre para grupos sensíveis';
    if (aqi <= 200) return 'Insalubre';
    if (aqi <= 300) return 'Muito Insalubre';
    return 'Perigoso';
};