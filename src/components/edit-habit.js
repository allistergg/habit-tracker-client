import React from 'react';
import { connect } from 'react-redux';

export function EditHabit(props) {
    
    return (
        <p>Edit habits</p>
    )
}

export const mapStatetoProps = (state) => {
    console.log(state)
    return {
        deletedHabit : state.deletedHabit
    }
}

export default connect(mapStatetoProps)(EditHabit);