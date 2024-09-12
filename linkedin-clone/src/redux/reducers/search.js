import { ADD_SEARCH } from "../action";


const initialState = {
    content:[],
}


const searchReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_SEARCH:
            return {
                ...state,
                content: action.payload,
            };

            default:
                return state;
    }

}


export default searchReducer;