import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras"


export default function App() {

  const [listaLetras, setListaLetras] = useState([]);
  const [Letra, setLetra] = useState('');
  const [Letrinha, setLetrinha] = useState([])
  const [underline, setUnderline] = useState([]);
  const [palavra, setPalavra] = useState('')
  const [chutePalavra, setChutePalavra] = useState('')
  const [ativarBtn, setAtivarBtn] = useState("");
  const [TrueOrFalse, setTrueOrFalse] = useState(true);
  const [cor, setCor] = useState('')
  const [countErro, setcountErro] = useState(0);
  

  function gameStart() {
        const palavraEscolhid = palavras[Math.floor(Math.random() * palavras.length)];
        setPalavra(palavraEscolhid);
        const arrayPalavra = [...palavraEscolhid];
        setLetrinha(arrayPalavra);
        const listUnderline = arrayPalavra.map(_l => "_ ");
        setUnderline(listUnderline);
        setTrueOrFalse(false)
        setAtivarBtn('ativado')
        setcountErro(0)
        setCor('')
        let newarr = [];
        setListaLetras(newarr);
  };

  function letraEscolhida(letra) {
    if (!listaLetras.includes(letra)) {
        setListaLetras([...listaLetras, letra])
        setLetra(letra)
    }
    let ltr = letra
    check(ltr)
         
  }

  function check(ltr){
    if(palavra.includes(ltr)){
      const novoArray = [...palavra];
      const novoUnderline = [...underline];
      novoArray.forEach((l, i) => {

        if(l === ltr){
          novoUnderline[i] = ltr;
          setUnderline([...novoUnderline])
        }
        EndGame(novoArray, novoUnderline);
      })
    }else{ 
      if(countErro <= 5){
        if(!listaLetras.includes(ltr)){
          let contador = countErro + 1;
          setcountErro(contador);
            if(contador === 6){
              setCor('red')
              setTrueOrFalse(true)
              setAtivarBtn('')
            }
        }
    }
      
    }
  }
  const palavraChutada = (a)=> {
    const palavraChute = a.target.value;
    setChutePalavra(palavraChute)
   
}
function checkPalavra(){
    setChutePalavra('')
    if(palavra.toString() === chutePalavra){
      setUnderline([...palavra])
      setCor('green')
      setTrueOrFalse(true)
      setAtivarBtn('')
    }else{
      setUnderline([...palavra])
      setcountErro(6)
      setCor('red')
      setTrueOrFalse(true)
      setAtivarBtn('')
    }
}

function EndGame(novoArray, novoUnderline){
    if(novoArray.toString() === novoUnderline.toString()){
      setCor('green')
      setTrueOrFalse(true)
      setAtivarBtn('')
    }
  }
  function confirmar(){
    if(chutePalavra === palavra){
      setTrueOrFalse(false)
      setUnderline(palavra)
      setCor('green')
    }else{
      setTrueOrFalse(false)
      setUnderline(palavra)
      setCor('red')
    }
  }


  return (
    <>
      <Jogo
        gameStart={gameStart}
        countErro={countErro}
        palavra={palavra}
        underline={underline}
        cor={cor}
      />
      <Letras
        listaLetras={listaLetras}
        ativarBtn={ativarBtn}
        TrueOrFalse={TrueOrFalse}
        letraEscolhida={letraEscolhida}
      />

        <Chute
        chutePalavra={chutePalavra}
        checkPalavra={checkPalavra}
        palavraChutada={palavraChutada}
        TrueOrFalse={TrueOrFalse}
        confirmar={confirmar}
      />
    </>
  );
}