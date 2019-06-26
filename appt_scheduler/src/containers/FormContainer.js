import { connect } from 'react-redux'
import Form from '../components/Form'

//setting props 
const mapStateToProps = (state)=>{
    return {
        name : state.name,
        phone: state.phone,
        apptTime : state.apptTime
    }
}

//dispatched actions set phone number and name
const mapDispatchToProps =(dispatch) =>{
    return{
        setName : (name)=> dispatch({type: "SET_NAME", name:name}),
        setPhone : (phone)=> dispatch({type: "SET_PHONE", phone:phone})
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)