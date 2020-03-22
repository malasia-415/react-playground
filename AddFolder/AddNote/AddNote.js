import React, { Component } from 'react';

export default function ValidationError(props) {
    if(props.message) {
      return (
        <div className="error">{props.message}</div>
      );
    }
  
    return <></>
  }
  

handleSubmit(event) 
    event.preventDefault();
    const name = this.nameInput.current.value;
    console.log('Name: ', name);

<button type="reset" className="new_folder"></button>

    validateName() 
        const name = this.state.name.value.trim();
        if (name.length === 0) {
          return 'Name is required';
        } else if (name.length < 3) {
          return 'Name must be at least 3 characters long';
        }
      
export default AddNote;