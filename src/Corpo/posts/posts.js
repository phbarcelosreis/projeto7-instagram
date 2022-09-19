import react from "react"

function Post(props) {

    const [clique, mudarClique] = react.useState(false)
    const [cliquesave, mudarCliquesave] = react.useState(false)
    const [curtida, setCurtida] = react.useState(props.numeroPost)
    const [heart, setHeart] = react.useState("heart-outline")
    const [redHeart, setRedheart] = react.useState("")
    const [salvar, setSalvar] = react.useState("bookmark-outline")

    function contadorCurtida() {
        if (clique) {
            setCurtida(curtida - 1)
            setHeart("heart-outline")
            setRedheart("")
            
        } else{
            setCurtida(curtida + 1)
            setHeart("heart")
            setRedheart("red")
        }
        mudarClique(!clique)
    }

    function save(){
        if (cliquesave) {
            setSalvar("bookmark-outline") 
        } else{
            setSalvar("bookmark")
        }
        mudarCliquesave(!cliquesave)
    }

    return (

        <div className="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imagemUser} />
                        {props.nomeUser}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.imagePost} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name={heart} class = {redHeart} onClick={() => contadorCurtida(props)}></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>


                        <div>
                            <ion-icon name={salvar} onClick={save}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imagemPostbaixo} />
                        <div class="texto" >
                            Curtido por <strong>{props.nomePost}</strong> e <strong>outras {curtida} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default function Posts() {




    const postagens = [
        {
            imagemUser: "assets/img/meowed.svg",
            nomeUser: "meowed",
            imagePost: "assets/img/gato-telefone.svg",
            imagemPostbaixo: "assets/img/respondeai.svg",
            nomePost: "respondeai",
            numeroPost: 101523

        },

        {
            imagemUser: "assets/img/barked.svg",
            nomeUser: "barked",
            imagePost: "assets/img/dog.svg",
            imagemPostbaixo: "assets/img/adorable_animals.svg",
            nomePost: "adorable_animals",
            numeroPost: 99159

        },


    ]

    return (postagens.map((props) => <Post imagemUser={props.imagemUser} nomeUser={props.nomeUser} imagePost={props.imagePost} imagemPostbaixo={props.imagemPostbaixo} nomePost={props.nomePost} numeroPost={props.numeroPost} />))


}


