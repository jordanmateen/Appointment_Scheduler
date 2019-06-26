import { connect } from 'react-redux'
import ApptApp from '../components/ApptApp'


const mapStateToProps = (state)=>{
    return {
        times : state.times,
        isShowing : state.isShowing
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadTimes : () => dispatch({type : 'LOAD_TIME_SLOTS'}),
        openModal : ()=> dispatch({type: "OPEN_MODAL"}),
        closeModal : () => dispatch({type : 'CLOSE_MODAL'})
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ApptApp)