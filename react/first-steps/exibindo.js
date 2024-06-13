// Expressões javascript dentro do HTML através de {}

const user = {
    name: 'Bruno Fernandes',
    imageUrl: 'https://b.fssta.com/uploads/application/soccer/headshots/1593.vresize.350.350.medium.21.png',
    imageSize: 90
}

export default function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl}
                alt={'Foto de ' + user.name} 
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}

// Uso do atributo style quando os estilos dependerem de variáveis JS