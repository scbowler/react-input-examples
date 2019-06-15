import React, { Component } from 'react';

class Example2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            password: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    // Much cleaner and reusable solution
    // but much much harder for the students to understand
    handleInputChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        console.log('Example 2 Form Values:', this.state);

        this.resetForm();
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            phone: '',
            password: ''
        });
    }

    render() {
        const { name, email, phone, password } = this.state;

        return (
            <div className="col s6 offset-s3">
                <h1 className="center">Example 2</h1>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" id="name" name="name" value={name} onChange={this.handleInputChange} autoComplete="name" />
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" id="email" name="email" value={email} onChange={this.handleInputChange} autoComplete="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" id="phone" name="phone" value={phone} onChange={this.handleInputChange} autoComplete="tel" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input type="password" id="password" name="password" value={password} onChange={this.handleInputChange} autoComplete="new-password" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn red darken-2 mx" type="button" onClick={this.resetForm}>Reset Form</button>
                            <button className="btn blue-grey">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Example2;
