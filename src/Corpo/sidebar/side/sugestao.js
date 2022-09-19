export default function Sugestao() {

    const suggestions = [
        {
            suggestImg: "assets/img/bad.vibes.memes.svg",
            suggestName: "bad.vibes.memes"

        },
        {
            suggestImg: "assets/img/chibirdart.svg",
            suggestName: "chibirdart"
        },
        {
            suggestImg: "assets/img/razoesparaacreditar.svg",
            suggestName: "razoesparaacreditar"
        },
        {
            suggestImg: "assets/img/adorable_animals.svg",
            suggestName: "adorable_animals"
        },
        {
            suggestImg: "assets/img/smallcutecats.svg",
            suggestName: "smallcutecats"
        },

    ]


    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map((props) =>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={props.suggestImg} />
                        <div class="texto">
                            <div class="nome">{props.suggestName}</div>
                            <div class="razao">Segue você</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            )}



        </div>

    )
}