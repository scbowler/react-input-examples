import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import Example1 from './example_1';
import Example2 from './example_2';
import Example3 from './example_3';

class App extends Component {
    state = {
        active: 0,
        Form: Example1
    }

    changeExampleForm(Form, active){
        this.setState({ active, Form });
    }

    setClass(num){
        const { active } = this.state;

        return `btn blue ${active === num ? 'darken-2' : 'lighten-2'} mx`;
    }

    RenderButtons = () => {

        return (
            <div className="row center">
                {
                    [Example1, Example2, Example3].map((ex, i) => (
                        <button key={i} className={this.setClass(i)} onClick={this.changeExampleForm.bind(this, ex, i)}>View Example {i + 1}</button>
                    ))
                }
            </div>
        )
    }

    render(){
        const { state: { Form }, RenderButtons } = this;

        return (
            <div className="container my">
                <RenderButtons />

                <div className="row">
                    <Form/>
                </div>
                
                <RenderButtons />
            </div>
        );
    }
}

export default App;
