import React, { Component } from 'react'
import '../Form.css'
class TimeSlot extends Component {

    //handles retrieving value from appointment slot
    handleClick(e){
        let {setTime} = this.props
        setTime(e.target.value)
    }

    //renders time slot
    render(){
        let { hour , showModal} = this.props
        return(
            <div>
                <div onClick = {this.handleClick.bind(this)}>
                    <input type="radio" name="time_slot" value={hour} onClick= {showModal}/> 
                    <label htmlFor="hour"> {hour} </label><br/>
                    
                </div>
            </div>
        )
    }
}
export default TimeSlot