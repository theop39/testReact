import './../css/Banner.css'
import logo from './../assets/logo.png'

function Banner() {
    const mainTitle = "La maison de la jungle"
    
    return  <div className="lmj-banner">
                <img src={logo} className="lmj-logo" alt="feuille"/>
                <h1> { mainTitle.toString() } </h1> 
            </div>
}

export default Banner