import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "reactstrap";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent.js";
import "./Appp.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>{" "}
          </div>{" "}
        </Navbar>{" "}
        <Menu />
      </div>
    );
  }
}

export default App;
