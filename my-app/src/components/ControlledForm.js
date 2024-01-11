import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : ''
      }
    }

    handleNameChange = (event) => {
        // fetch the values from input field
        this.setState({
            name : event.target.value
        })
    }
  render() {
    return (
      <div>
        <form>
            {/* Uncntrolled form managed by DOM as it refreshes on submit button click */}
            <label htmlFor='id-name'>Your Name:</label>
            <input 
                value={this.state.name}
                onChange={this.handleNameChange}
                id='id-name'
                name='name'
                type='text'
            />
            <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default ControlledForm