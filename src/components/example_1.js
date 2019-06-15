import React, { Component } from 'react';

class Example1 extends Component {
    constructor(props){
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

    handleInputChange(event){
        // Use console.logs to show where and what information we will be using to update the form
        console.log('Input DOM Element:', event.target);
        // Shows DOM object, to show available properties and methods
        // console.dir(event.target)
        console.log('Input Name:', event.target.name);
        console.log('Input Value:', event.target.value);

        // Using a switch statement here is generally not the best approach
        // Students can usually understand this the easiest though
        // Example 2 shows a better way to handle the handleInputChange method
        // But this is the best place to start
        switch(event.target.name){
            case 'name':
                this.setState({
                    name: event.target.value
                });
                break;
            case 'email':
                this.setState({
                    email: event.target.value
                });
                break;
            case 'phone':
                this.setState({
                    phone: event.target.value
                });
                break;
            case 'password':
                this.setState({
                    password: event.target.value
                });
        }
    }

    handleFormSubmit(event){
        event.preventDefault();

        console.log('Example 1 Form Values:', this.state);

        this.resetForm();
    }

    resetForm(){
        this.setState({
            name: '',
            email: '',
            phone: '',
            password: ''
        });
    }

    render(){
        const { name, email, phone, password } = this.state;

        return (
            <div className="col s6 offset-s3">
                <h1 className="center">Example 1</h1>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" id="name" name="name" value={name} onChange={this.handleInputChange} autoComplete="name"/>
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
                            <button className="btn red mx" type="button" onClick={this.resetForm}>Reset Form</button>
                            <button className="btn green">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Example1;
