import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header () {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DS Meta</h1>
                    <p>Developed by Lucas Bestel
                        <a href="https://www.linkedin.com/in/lucasbestel/"> (linkedin.com/in/lucasbestel)</a>
                    </p>
            </div>
        </header>

    )
}

export default Header