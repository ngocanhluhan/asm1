import Main from "./Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Staffs: STAFFS,
      SelectedStaff: null,
      OnChangeColumn: null,
    };
    this.onClickChange = this.onClickChange.bind(this);
  }

  onStaffClick(SelectedStaff) {
    this.setState({ SelectedStaff: SelectedStaff });
  }

  onClickChange(nChangeColumn) {
    this.setState({ OnChangeColumn: OnChangeColumn });
  }

  render() {
    const { Staffs, SelectedStaff, OnChangeColumn } = this.state;
    return (
      <div className="container-fuild">
        <Navbar dark color="primary">
          <NavbarBrand>
            <h1 className="text-center"> Ứng dụng quản lý nhân sự v1 .0 </h1>{" "}
          </NavbarBrand>{" "}
        </Navbar>{" "}
        <Liststaffs
          Staffs={Staffs}
          onStaffClick={(SectedStaff) => {
            this.onStaffClick(SelectedStaff);
          }}
          SelectedStaff={SelectedStaff}
          OnChangeColumn={OnChangeColumn}
        />{" "}
        <DetailStaff Staff={SelectedStaff} />{" "}
        <ChangeColumn OnChangeColumn={OnchangeColumn} />{" "}
      </div>
    );
  }
}
export default App;
