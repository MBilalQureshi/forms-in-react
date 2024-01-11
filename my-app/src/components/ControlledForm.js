import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

      }
    }

  render() {
    return (
      <div>
        <form>
            {/* Uncntrolled form managed by DOM as it refreshes on submit button click */}
            <label htmlFor='id-name'>Your Name:</label>
            <input id='id-name' name='name' />
            <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default ControlledForm