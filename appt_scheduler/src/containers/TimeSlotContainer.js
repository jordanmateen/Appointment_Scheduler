import { connect } from 'react-redux'
import TimeSlots from '../components/TimeSlots'

//setting props 
const mapStateToProps = (state)=>{
    return {
       apptTime : state.apptTime
    }
}

//dispatched actions set phone number and name
const mapDispatchToProps =(dispatch) =>{
    return{
        setTime : (hour)=> dispatch({type: "SET_TIME", hour:hour})
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimeSlots)