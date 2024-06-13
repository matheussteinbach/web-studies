// É possível compartilhar o estado dos dois botões passando o estado para o MyApp
// Elevar o estado


import {useState} from 'react'

export default function MyApp(){
    const [count, setCount] = useState(0)

    function handleClick(){
        setCount(count + 1)
    }
    
    return (
        <div>
            <h1> Contadores que são atualizados juntos </h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    )
}

// É possível passar estados e informações através das chaves JSX, igual em tags html
// Informação passada é chamada de props

function MyButton( {count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicado {count} vezes!
        </button>
    )
}

