export default function Stories() {


    const contentStory = [{
        texto: "9gag",
        foto: "assets/img/9gag.svg",
    },
    {
        texto: "meowed",
        foto: "assets/img/meowed.svg",
    },
    {
        texto: "barked",
        foto: "assets/img/barked.svg",
    },
    {
        texto: "nathanwpyle...",
        foto: "assets/img/nathanwpylestrangeplanet.svg",
    },
    {
        texto: "wawawiwac...",
        foto: "assets/img/wawawicomics.svg",
    },
    {
        texto: "respondeai",
        foto: "assets/img/respondeai.svg",
    },
    {
        texto: "filomoderna",
        foto: "assets/img/filomoderna.svg",
    },
    {
        texto: "memeriago",
        foto: "assets/img/memeriagourmet.svg",
    }

    ]

    return (
        <ul className="stories">
            {contentStory.map((props) =>
                <div class="story">
                    <div class="imagem">
                        <img src={props.foto} />
                    </div>
                    <div class="usuario">
                        {props.texto}
                    </div>
                </div>
            )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </ul>
    )


}

