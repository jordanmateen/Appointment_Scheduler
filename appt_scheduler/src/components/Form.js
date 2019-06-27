import React , { Component } from 'react'
import axios from 'axios'

// manually called the API. This can also be done with a proxy.
const API = "http://localhost:2341/"
//Form Componet
class Form extends Component {
    //Set Name on form
    handleNameInput(event) {
      let { setName }= this.props
      setName(event.target.value);
    }

    //Set phone number on form
    handlePhoneInput(event) {
      let { setPhone }= this.props
      setPhone(event.target.value);
    }
    
    //submit alert when appointment is set.
    handleSubmit(event) {
     let {name , apptTime , phone} = this.props
      alert(`${name}, your appointment submitted Sucessfully  for ${apptTime}`);
      event.preventDefault();

      const body = {
        name: name, 
        phone : phone, 
        time: apptTime 
      }

      
      axios.post(`${API}api`, body )
        .then(res =>{
          console.log(res)
        })
    }
  
    //renders appointment form
    render() {
      let { closeModal, name, phone, apptTime} = this.props
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          Confirm your appointment for {apptTime} <br/>
          <label>
            Name:
            <input type="text" value={name} onChange={this.handleNameInput.bind(this)} />
            Phone:
            <input type="text" value={phone} onChange={this.handlePhoneInput.bind(this)} />
          </label>
          <input type="submit" value="Submit" onClick = {closeModal}/>
        </form>
      );
    }
  }

export default Form