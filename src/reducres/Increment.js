import { INCREMENT }  from "../actions/actionType";

const Increment = (state = {count: 3 } , action) => {

    switch(action.type) {
        case INCREMENT:
        return{...state , count: state.count + 1}
        default:
            return state
    }
}

export default Increment