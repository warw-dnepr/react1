

import '../App.css'
import Block from './BlockForMain';


function Main(){


   return (
      <div className="main">
   <div className="aside">
      <h2>Aside Block</h2>
      <ul>
         <li>Lorem ipsum dolor sit amet.</li>
         <li>Lorem ipsum dolor sit amet.</li>
         <li>Lorem ipsum dolor sit amet.</li>
         <li>Lorem ipsum dolor sit amet.</li>
         <li>Lorem ipsum dolor sit amet.</li>
         <li>Lorem ipsum dolor sit amet.</li>
         <li>Lorem ipsum dolor sit amet.</li>
      </ul>
   </div>
   <div className="main-block">
      <h2>Main Block</h2>
      <div className="div">
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
         <Block/>
   </div>   
      </div>
   </div>
   )
}

export default Main;
