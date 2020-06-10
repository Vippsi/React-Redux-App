import axios from 'axios'

export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_DOGS = 'UPDATE_DOGS'
export const SET_ERROR = 'SET_ERROR'

export const getData = (breed) => dispatch => {
    dispatch({type: FETCH_DATA})
    setTimeout(() => {
        axios
            .get(`https://dog.ceo/api/breed/${breed}/images`)
            .then(res => {
                console.log(res.data.message)
                dispatch({type: UPDATE_DOGS, payload:res.data.message})
            })
            .catch(err => {
                console.error('error fetching data', err)
                dispatch({type: SET_ERROR, payload: 'error fetching data'})
            })
    }, 2000)
}