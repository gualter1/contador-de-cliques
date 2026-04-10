import {createRoot} from "react-dom/client";
import React, {useState}  from "react";

function Botao (props){
const {children, funcao, ...rest} = props
  return (<>
  <button onClick={funcao} value={rest}>{children}</button>
  </>)
}

function Contador() {
  const [ contandor, setContador] = useState(0)
  
  function incrementaContador(){
    setContador(prev => prev + 1)
  }
  
  function decrementarContador(){
    setContador(prev => prev > 0 ? prev - 1 : 0 )
  }
  return(<>
  <h1>Contador DevStart</h1>
  <p>{contandor}</p>
  <Botao funcao={incrementaContador} children="aumenta em 1"/>
  <Botao funcao={decrementarContador} children="diminui em 1"/>
  </>)
}

function App() {
    return <>
     <Contador />
    </>
}

const root = document.querySelector("#root");
createRoot(root).render(
    <React.StrictMode><App /></React.StrictMode>
);  

