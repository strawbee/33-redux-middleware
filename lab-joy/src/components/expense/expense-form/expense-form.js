import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expenses ?
      this.props.expenses :
      {
        name: '',
        expense: 0,
        editing: false,
        categoryId: this.props.categoryId,
      };

    let memberFunctions = Object.getOwnPropertyNames(ExpenseForm.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);

    this.setState({
      name: '',
      expense: 0,
      editing: false,
      categoryId: this.props.categoryId,
    });
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

        <input type="number" name="expense" value={this.state.expense} onChange={this.handleChange} />

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;