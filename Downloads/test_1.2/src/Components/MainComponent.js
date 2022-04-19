import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import StaffList from './StaffListComponent';
import Staff from './StaffComponent';
import { STAFFS } from '../shared/staffs';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: STAFFS,
            value: null,

        }
    }


}
export default Main;