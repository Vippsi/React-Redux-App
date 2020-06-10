import { FETCH_DATA, UPDATE_DOGS, SET_ERROR } from '../actions'

const initialState = {
    dogs:[],
    isFetchingData: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
        return {
            ...state,
            isFetchingData: true,
            dogs: [],
            error:''

        }
        case UPDATE_DOGS:
            return {
                ...state,
                dogs: action.payload,
                isFetchingData: false,
                error: ''
            }
        case SET_ERROR:
            return {
                ...state, 
                isFetchingData:false,
                error: action.payload
            }
        default:
            return state
    }
}