import {useState} from 'react'

// Funções com inicio use são chamadas de Hooks, so podem ser chamados no topo dos componentes

function MyButton() {
    const [count, setCount] = useState(0)
    // Variável de estado, primeiro parâmetro nome/estado atual, segundo setter
    // () Valor inicial/padrão do estado

    function handleClick(){
        setCount(count + 1)
    }
    
    return (
        <button onClick={handleClick}>
            Clicado {count} vezes!
        </button>
    )
}

// Apenas referência da função tratadora de evento.

export default function MyApp(){
    return (
        <div>
            <h1> Contadores que atualizam separadamente </h1>
            <MyButton />
            <MyButton />
        </div>
    )
}

// Cada instância do componente terá seu estado separado.
