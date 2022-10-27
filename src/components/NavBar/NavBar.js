import "./NavBar.css";


function NavBar() {
  return (

     <div id="hola">
        <ul className="nav">
          <li><a href="/">Calsado</a>
           <ul>
              <li><a href="/">producto 1</a></li>
              <li><a href="/">producto 2</a></li>
              <li><a href="/">producto 3</a></li>
              <li><a href="/">producto 4</a></li>
           </ul>
          </li>
          <li><a href="/">Contactanos</a>
           <ul>
              <li><a href="/">Whatsapp</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">Facebook</a></li>
            </ul>
          </li>
       </ul>
    </div>
  )
}

export default NavBar

