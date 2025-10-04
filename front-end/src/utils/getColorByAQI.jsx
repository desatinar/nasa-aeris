export const getColorByAQI = (aqi) => {
    if (aqi <= 50) return '#00e400'; // Bom (Verde)
    if (aqi <= 100) return '#ffff00'; // Moderado (Amarelo)
    if (aqi <= 150) return '#ff7e00'; // Insalubre para grupos sensíveis (Laranja)
    if (aqi <= 200) return '#ff0000'; // Insalubre (Vermelho)
    if (aqi <= 300) return '#8f3f97'; // Muito Insalubre (Roxo)
    return '#7e0023'; // Perigoso (Marrom)
};