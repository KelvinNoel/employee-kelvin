import React, { Component } from 'react';
import '../EmployeeForm.css'; // Import the CSS file

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            jobTitle: '',
            department: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, jobTitle, department } = this.state;
        if (!name || !email || !jobTitle || !department) {
            alert('All fields are required.');
            return;
        }
        console.log('Form is submitted:', this.state);
        alert('Form is submitted: ' +'Name: '+ this.state.name + ' \nEmail : ' + this.state.email + '\n JobTitle :  ' + this.state.jobTitle + ' \n Department :  ' + this.state.department);
        this.setState({
            name: '',
            email: '',
            jobTitle: '',
            department: ''
        });
    };
  

    render() {
        return (

            <div>
                <h1>Employee Management System</h1>
                <h4>By Kelvin Noel</h4>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                </div>
                <div>
                    <label>Job Title:</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={this.state.jobTitle}
                        onChange={this.handleChange}
                        />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={this.state.department}
                        onChange={this.handleChange}
                        />
                </div>
                <button type="submit">Submit</button>
            </form>
                        </div>
        );
    }
}

export default EmployeeForm;
