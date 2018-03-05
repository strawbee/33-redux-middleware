import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.categories ? 
      this.props.categories :
      { 
        name: '',
        budget: 0,
        editing: false,
      };

    let memberFunctions = Object.getOwnPropertyNames(CategoryForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(e) {
    this.setState ({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);

    this.setState({
      name: '',
      budget: 0,
      editing: false,
    });
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

        <input type="number" name="budget" value={this.state.budget} onChange={this.handleChange} />

        <button type="submit">{this.props.buttonText}</button>
      </form>    
    );
  }
}

export default CategoryForm;