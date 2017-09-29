import React, { Component } from 'react';
import fire from './assets/js/fire.js';

import MainCss from './assets/css/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      messages: [] 
    };
  }
  
  componentWillMount(){
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }

  addMessage(e){
    e.preventDefault();
    fire.database().ref('messages').push( this.input.value );
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.addMessage.bind(this)}>
        <input type="text" ref={ el => this.input = el }/>
        <input type="submit"/>
        <ul>
          {
            this.state.messages.map(message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </form>
    );
  }
}

export default App;
