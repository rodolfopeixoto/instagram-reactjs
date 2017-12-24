import React, { Component } from 'react';

export default class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {msg: ''};
        
    }
    


    handleSubmit(event) {
      event.preventDefault();

      const requestInfo = {
        method: 'POST',
        body: JSON.stringify({
            login: this.login.value,
            senha: this.senha.value
        }),
        headers: new Headers({
            'Content-type': 'application/json'
        }) 
      };

      fetch('http://localhost:8080/api/public/login', requestInfo)
        .then(response => {
            if(response.ok){
                return response.text();
            }else{
              this.setState({msg: 'Não foi possível fazer o login.'})
            }
        })
        .then( token => {
            console.log(token);
        })
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref={(input) => this.login = input}/>
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
        )
    }
}