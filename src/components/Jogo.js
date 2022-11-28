export default function Jogo({countErro, underline, gameStart,palavra,cor}) {
       
    return (
        <div className="jogo">
            <div>
                <img data-test="game-image" src={`./assets/forca${countErro}.png`} />
            </div>
            <div className="escolherPalavra">
                <div>
                    <button data-test="choose-word" className="botao" onClick={gameStart}>Escolher Palavra</button>
                </div>
                <div className="palavra-sorteada">
                    <div data-answer={palavra} data-test="word" className={`card ${cor}`}>{countErro === 6 ? palavra : underline}</div>
                </div>
            </div>
        </div>
    )
}