import react from "react"

export default function User() {
    const [nome, letNome] = react.useState("catana")
    const [foto, letFoto] = react.useState("assets/img/catanacomics.svg")
    const [userName, letUsername] = react.useState(<strong>{"catanacomics"}</strong>)


    function insertName() {
        const nomePrompt = prompt("Digite seu nome de usuário:")
        letNome(nomePrompt)
    }

    function insertUsername() {
        const nomePrompt = prompt("Digite seu nome de usuário:")
        letUsername(nomePrompt)
    }

    function insertFoto() {
        const fotoPrompt = prompt("Digite o url da sua foto:")
        letFoto(fotoPrompt)
    }

    return (
        <div class="usuario">
            <img onClick={insertFoto} src={foto === "" || foto === null ? "assets/img/catanacomics.svg" : foto} />
            <div class="texto">
                <div onClick={insertUsername}>
                    {userName === "" || userName === null ? <strong>{"catanacomics"}</strong> : <strong>{userName}</strong>}
                </div>
                <span>
                    <p onClick={insertName}>
                        {nome === "" || nome === null ? "catana" : nome}
                        <ion-icon name="pencil"></ion-icon>
                    </p>
                </span>
            </div>
        </div>
    )
}