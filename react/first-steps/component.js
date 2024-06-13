function MyButton() {
    return (
        <button>
            Eu sou um botão!
        </button>
    )
}

export default function MyApp() {
    return (
        <div>
            <h1> Bem-vindo ao meu Aplicativo.</h1>
            <MyButton />
        </div>
    )
}

// Componentes React são funções que retornam um html
// Possível retornar apenas um componente html - aninhamento em uma div ou <> </>
// Para chamar um Componente React <Nome /> (Letra Maíuscula no início)
// Função MyApp exportada por default

// JSX - tags vazias são fechadas por padrão <br />, <MyButton />