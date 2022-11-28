export default function Letras({ listaLetras, ativarBtn, trueOrFalse,letraEscolhida}) 
{
   const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   
   return (
       <div className="letras">
           <div className="alfabeto">
               {alfabeto.map((a) => 
               <button
                   data-test="letter"
                   disabled={!listaLetras.includes(a)? trueOrFalse : true} 
                   className={`btn ${listaLetras.includes(a) ? "" : ativarBtn}`} 
                   onClick={() => letraEscolhida(a)}>{a}
               </button>)}
           </div>
       </div>
   )    }
