import React, { Component } from 'react';

class App extends Component {
    render() {
      return (
        <div className="AddNote">
          Error Boundary App
        </div>
      );
    }
  }
  

   
<form className="new folder" 
    onSubmit={e => this.handleSubmit(e)}></form>

    handleSubmit(event) 
        event.preventDefault();
        const name = this.PaymentResponse.state;
        console.log('Name: ', name);
      

export default AddFolder;