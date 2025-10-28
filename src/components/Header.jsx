import './Header.css'
import logo from '../assets/SIMONE BOLOS.png'

function Header() {
    return (
        <div class='DivHeader' >
            <img class="LogoSi" src={logo} alt="Simone" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>|</li>
                    <li>Produtos</li>
                    <li>|</li>
                    <li>Contato</li>
                    <li>|</li>
                    <li>Encomendas</li>
                </ul>
            </nav>
        </div >

    );
}

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "20px",
    textAlign: "center"
  }
};

export default Header;