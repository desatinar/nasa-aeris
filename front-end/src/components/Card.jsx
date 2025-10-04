const Card = () => {
    return (
        <>
            <div className="card mb-3" style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Alerta !!</h5>
                    <p className="card-text"> Qualidade do Ar: Moderada!! </p>
                    <p>A qualidade do ar na sua região está em nível médio.
                        Pessoas mais sensíveis como idosos, crianças e pessoas com problemas respiratórios podem sentir leve desconforto ao realizar atividades intensas ao ar livre</p>
                    <a href="#" className="btn btn-primary">Saiba mais</a>
                </div>
            </div>

            <div className="card text-center mb-3" style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Dicas !!</h5>
                    <p className="card-text">💡 Recomendações: Evite esforços físicos prolongados ao ar livre. Prefira locais bem ventilados. Acompanhe as atualizações do Aeris para saber se a qualidade do ar melhora ou piora nas próximas horas</p>
                    <a href="#" className="btn btn-primary">📊 Aeris monitorando o ar que você respira</a>
                </div>
            </div>

            <div className="card text-end" style={{ width: "25rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Curiosidade</h5>
                    <p className="card-text">Mesmo quando o ar parece “ok”, partículas microscópicas (como PM2.5) ainda podem afetar nossa saúde com o tempo. 👁️‍🗨️</p>
                    <a href="#" className="btn btn-primary">Saiba mais.</a>
                </div>
            </div>
        </>
    )
}

export default Card