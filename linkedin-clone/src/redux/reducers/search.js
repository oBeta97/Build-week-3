import { ADD_SEARCH, ADD_SEARCH_STRING } from "../action";


const initialState = {
    searchString:'',
    content:[],
}


const searchReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_SEARCH:
            return {
                ...state,
                content: action.payload,
            };

            case ADD_SEARCH_STRING:
                return {
                    ...state,
                    searchString: action.payload
                };

            default:
                return state;
    }

}


export default searchReducer;