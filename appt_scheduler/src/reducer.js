//initial state 
let initialState = {
    times :  [
        '9AM-10AM',
        '10AM-11AM',
        '11AM-12PM',
        '12PM-1PM',
        '1PM-2PM',
        '2PM-3PM',
        '3PM-4PM',
        '4PM-5PM',
    ],
    apptTime : '',
    name : '',
    phone : '',
    isShowing : false
}


//reducer handles actions for state change
const reducer = (state = initialState, actions) => {

    //destructiing payloads from containers
    let {type, name, phone, hour} = actions

    //cases for dispatch
    switch(type){
        case 'LOAD_TIME_SLOTS' :
            return{
                ...state,
                times : state.times
            }
        case 'OPEN_MODAL':
            return {
                ...state,
                isShowing : true
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                isShowing : false
            }
        case 'SET_NAME':
            return{
                ...state,
                name : name
            }
        case 'SET_PHONE':
            return{
                ...state,
                phone : phone
            }
        case 'SET_TIME': 
            return{
                ...state,
                apptTime : hour
            }
        default:
            return {
                ...state
            }
    }

}

//return reducer for store access
export default reducer
