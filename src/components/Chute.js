export default function Chute({ chutePalavra, palavraChutada, confirmarPalavra, verdadeOuFalse, confirmar }) {
    return (
        <div className="container-chute">
            <form onSubmit={confirmar}>
                <div className="chute">
                    <p>Já sei a palavra!</p>
                    <input
                        disabled={verdadeOuFalse}
                        data-test="guess-input"
                        type="text"
                        onChange={(e) => palavraChutada(e)}
                        value={chutePalavra}
                    />
                    <button
                        disabled={verdadeOuFalse}
                        data-test="guess-button"
                        type="submit"
                    >Chutar
                    </button>
                </div>
            </form>
        </div>
    )
}