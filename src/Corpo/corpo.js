import Posts from './posts/posts'
import Sidebar from './sidebar/sidebar'
import Stories from './stories/stories'
/* import Sidebar from '.sidebar/sidebar' */

export default function Corpo() {

    return (
<div class="corpo">
      <div class="esquerda">
        <Stories/>
        <Posts/>

      </div>
      <Sidebar/>

      
    </div>
    )

}