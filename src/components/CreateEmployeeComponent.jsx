import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        EmployeeService.createEmployee(employee)
            .then(res => {
                this.props.history.push('/employees');
            });
    }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value})
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value})
    }

    changeEmailHandler = (event) => {
        this.setState({emailId: event.target.value})
    }

    cancel() {
        this.props.history.push('/employees');
    }

  render() {
      return (
          <div>
              <br />
            <div className="container">
                  <div className='row'>
                      <div className="card col-md-6 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form action="/employees" method="post">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        placeholder='First Name'
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        className='form-control'
                                        value={this.state.firstName}
                                        onChange={this.changeFirstNameHandler} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        placeholder='Last Name'
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        className='form-control'
                                        value={this.state.lastName}
                                        onChange={this.changeLastNameHandler} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="emailId">Email Address</label>
                                    <input
                                        placeholder='Email Address'
                                        type="email"
                                        name="emailId"
                                        id="emailId"
                                        className='form-control'
                                        value={this.state.emailId}
                                        onChange={this.changeEmailHandler} />
                                </div>

                                <br />

                                <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}
