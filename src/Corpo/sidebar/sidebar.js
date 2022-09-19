import Sugestao from "./side/sugestao";
import User from "./side/user";



export default function Sidebar() {
  return (
    <div>
      <div class="sidebar">
        <User/>
        <Sugestao/>


        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    </div>


  )
}
