export default function Chute({chutePalavra, palavraChutada, confirmar,trueOrFalse }){

    return(
        <div className="container-chute">
            <div className="chute">
                <p>Já sei a palavra!</p>
                <input 
                    disabled={trueOrFalse}
                    data-test="guess-input"
                    type="text"
                    onChange={palavraChutada}
                    value={chutePalavra}
                />
                <button  
                    disabled={trueOrFalse} 
                    data-test="guess-button" 
                    onClick={confirmar}
                    >Chutar
                </button>
            </div>
        </div>
    )
}
