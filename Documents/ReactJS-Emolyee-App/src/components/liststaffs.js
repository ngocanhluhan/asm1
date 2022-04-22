import { Component } from "react";

class Liststaffs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { SelectedStaff } = this.props;
    const listStaff = this.props.Staffs.map((staff) => {
      return (
          <div
            className="col-12 col-md-6 col-xl-3 card staff-list"
            onClick={() => {
              this.props.onStaffClick(staff);
            }}
          >
            <p>{staff.name}</p>
          </div>
          )
    });

    return (
      <div className="container list">
        <div className="row ">{listStaff}</div>
        {!SelectedStaff && <p className="text-center">Nhấn vào tên nhân viên để hiện thông tin</p>}
      </div>
    );
  }
}

export default Liststaffs;
