import { render } from "@testing-library/react";
import { Component } from "react";
class StaffList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const StaffList = this.props.Staffs.map((staff) => {
      reuturn(
        <div className={this.state.columnNumClass}>
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardTiltle> {staff.name} </CardTiltle>{" "}
          </Card>{" "}
        </div>
      );
    });
    return (
      <div className="container list">
        <div classNmae="row">
          {" "}
          <StaffDetail staff={this.state.SelectedStaff} />{" "}
        </div>{" "}
        
      </div>
    );
  }
}
export default StaffList;
