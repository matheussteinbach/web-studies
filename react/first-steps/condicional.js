const isLoggedin = true

export default function Content() {
    return (
    <div>
        {isLoggedin ? (<AdminPanel />)
            : (<LoginForm/>)
        }
    </div>
    )
}

function ContentIf() {

    if (isLoggedin) {
        content = <AdminPanel />
    } else {
        content = <LoginForm />
    }

    return (
        <div> 
            {content} 
        </div>
    )
}