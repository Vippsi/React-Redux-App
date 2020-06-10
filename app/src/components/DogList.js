import React from 'react'
import { connect } from 'react-redux'

const DogList = props => {

    return (
        <div className='dogDiv'>
        {props.error ? (
            <div>{props.error}</div>
        ) : (
            props.dogs.map(dog => <img className='dogImage' src={dog}/>)
        )}
        
        </div>
    )
}
const mapStateToProps = state => {
    return {
        dogs: state.dogs,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(DogList)