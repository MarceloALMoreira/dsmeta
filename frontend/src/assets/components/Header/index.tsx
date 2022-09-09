import logo from '../../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DS META 
                    <p> <strong>Gestão Venda online</strong> </p>
                    </h1>       
            </div>
        </header>

    )
}
export default Header;