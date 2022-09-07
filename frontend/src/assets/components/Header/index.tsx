import logo from '../../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    <span>Desenvolvido por</span>
                    <a href="#"> <strong>Marcelo Almeida</strong> </a><hr />
                </p>
            </div>
        </header>

    )
}
export default Header;