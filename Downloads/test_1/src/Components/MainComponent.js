import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import StaffList from './StaffListComponent';
import Staff from './StaffComponent';
import { STAFFS } from '../shared/staffs';
class Main extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          staffs: STAFFS,
          value: null,
      
      }
  }

  
  render() {
      const StaffInfo = () => {
          const {id} = useParams();
          return(
              <Staff staff={this.state.staffs.find((staff) => staff.id === Number(id))}/>
          )
      }


      return(
          <div>
              
              <Routes>
                  <Route exact path='/staffs' element={<StaffList staffs={this.state.staffs} value= {this.state.value} onClick={(value) => this.setState({value: value})} onSubmit={(value) => this.setState({staffs: value})}/>} />
                  <Route exact path='/staffs/:id' element={<StaffInfo />} />
                  <Route path='*' element={<StaffList staffs={this.state.staffs} value= {this.state.value} onClick={(value) => this.setState({value: value})} onSubmit={(value) => this.setState({staffs: value})}/>} />
              </Routes>
              
          </div>
      )
  }

}

export default Main;