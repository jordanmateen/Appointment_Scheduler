import React , { Component } from 'react'
import TimeSlotContainer from '../containers/TimeSlotContainer'
import FormModal from './FormModal'

import FormContainer from '../containers/FormContainer';

//Appointment Application
class ApptApp extends Component {
    
    //render app
    render(){

        //destructuing props
        let { times, openModal, closeModal,  isShowing } = this.props

        //returning time slots for render
        const timeSlot = times.map( (hour,i)=>{
            return(
                <div key = {i}>
                    <TimeSlotContainer hour = {hour}  showModal = {openModal}/>
                </div>
            )
        })
        return (
             <div>
              { isShowing ? <div onClick={this.handleClose} className="back-drop"></div> : null }
                <h1>Scgedule your appointment below</h1>
                {timeSlot}
                <FormModal className="modal"
                    show={isShowing}
                    close = {closeModal}>
                    <FormContainer closeModal = {closeModal}/>
                </FormModal> 
            </div>
        )
    }
}

export default ApptApp