import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import ExpenseForm from '../expense-form/expense-form';
import {expenseUpdate, expenseDelete} from '../../../actions/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: this.props.expenses ?
        this.props.expenses :
        {
          name: '',
          expense: 0,
          categoryId: this.props.categoryId,
        },
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(ExpenseItem.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleEditing(exp) {
    this.setState({ editing: !this.state.editing });
  }

  handleUpdate(exp) {
    this.setState({
      editing: !this.state.editing,
    });

    this.props.expenseItemExpenseUpdate(exp);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.expenseItemExpenseDelete(this.props.expenses);
  }

  render() {
    return (
      <div className="expense-item" key={this.props.expenses._id} onDoubleClick={this.handleEditing}>
        <h2>{this.props.expenses.name}</h2>
        <p>Expense: ${this.props.expenses.expense}</p>
        <button onClick={this.handleDelete}>{this.props.buttonText}</button>

        {renderIf(this.state.editing, <ExpenseForm expenses={this.props.expenses} buttonText="update expense" onComplete={this.handleUpdate} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseItemExpenseUpdate: exp => dispatch(expenseUpdate(exp)),
  expenseItemExpenseDelete: exp => dispatch(expenseDelete(exp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);