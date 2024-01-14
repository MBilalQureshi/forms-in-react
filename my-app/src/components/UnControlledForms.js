import React, { Component } from 'react'

export class UnControlledForm extends Component {
    // DOM is in control so we'll say it uncontrolled form
    constructor(props) {
      super(props)
    //   refs comes into play when DOM is in controll and there is no states to manage
    this.inputName = React.createRef();
    this.inputCategory = React.createRef();
    this.inputComment = React.createRef();
    }

    handleSubmit = (event) => {
      event.preventDefault();
    //   Now the "DOM" elements are uncontrolled but when they react here they are still controlled by REACT :)
    // 1 
    console.log(this.inputName.current.value) // Ali
    // 2
    console.log(this.inputName.current.id) // id-name
    // 3
    console.log(this.inputName.current.type)// text
    // and so on ...
    // to get complete element 
    console.log(this.inputName.current) // <input id='id-name' name='name' type='text' />
    //in short very useful

    console.log(this.inputCategory.current.value)
    console.log(this.inputComment.current.value)
    }
  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor='id-name'>Your Name:</label>
              <input 
                  id='id-name'
                  name='name'
                  type='text'
                  ref={this.inputName}
              />
            </div>
            <div>
              <label htmlFor='id-category'>Query Category</label>
              <select id="id-category" name="category" ref={this.inputCategory}>
                <option value="website">Website Issue</option>
                <option value="order">Order Issue</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <div>
              <label htmlFor="id-comments">Comments</label>
              <textarea id="id-comments" name="comments" ref={this.inputComment}></textarea>
            </div>
            <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default UnControlledForm