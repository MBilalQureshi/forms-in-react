import React, { Component } from 'react'

export class UnControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : '',
        //  category set to website by default
         category: 'website',
         comment:'',
      }
    }

    handleNameChange = (event) => {
        // fetch the values from input field
        this.setState({
            name : event.target.value
        })
    }

    handleCategoryChange = (event) =>{
      this.setState({
        category : event.target.value
      })
    }

    handleCommentChange = (event) =>{
      this.setState({
        comment : event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault();
      // Now this.state has all form data we can manipulate it or save it to db page refresh is prevent as per above line
      console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
            {/*on first commit -  Uncntrolled form managed by DOM as it refreshes on submit button click */}
            <div>
              <label htmlFor='id-name'>Your Name:</label>
              <input 
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  id='id-name'
                  name='name'
                  type='text'
              />
            </div>
            <div>
              <label htmlFor='id-category'>Query Category</label>
              <select id="id-category" name="category" onChange={this.handleCategoryChange}>
                {/* This ones a little differnet */}
                <option value="website">Website Issue</option>
                <option value="order">Order Issue</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div>
              <label htmlFor="id-comments">Comments</label>
              <textarea id="id-comments" name="comments" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
            </div>
            <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default UnControlledForm