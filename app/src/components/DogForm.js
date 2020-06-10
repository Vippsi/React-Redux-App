import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getData } from '../actions'

const DogForm = props => {
    
    
    const handleChanges = e => {
        setNewBreedText(e.target.value)
    }

    const handleGetData = e => {
        e.preventDefault()
        props.getData(breedText)
        setNewBreedText('')
    }

    const [breedText, setNewBreedText] = useState('') 
    return (
        <div className='formDiv'>
        <form>
            <input
            className='input'
            type='text'
            name='breed'
            placeholder='search for a breed'
            value={breedText}
            onChange={handleChanges} />

            {props.isFetchingData ? (
                <div>Fetching Data...</div>
            ) : (
                <button className='button' onClick={handleGetData}>Send it!</button>
            )}
            
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(DogForm)