import React, { Component } from 'react';

// For short forms it can be okay to
// directly use setState in onChange

class Example3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleFormSubmit(event) {
        event.preventDefault();

        console.log('Example 3 Form Values:', this.state);

        this.resetForm();
    }

    resetForm() {
        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className="col s6 offset-s3">
                <h1 className="center">Example 3</h1>

                <form onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="input-field">
                            <input type="text" id="email" name="email" value={email} onChange={({target}) => this.setState({email: target.value})} autoComplete="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field">
                            <input type="password" id="password" name="password" value={password} onChange={({ target }) => this.setState({ password: target.value })} autoComplete="current-password" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn red darken-4 mx" type="button" onClick={this.resetForm}>Reset Form</button>
                            <button className="btn purple">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Example3;
