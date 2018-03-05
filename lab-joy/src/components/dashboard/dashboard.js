import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryDelete} from '../../actions/category-actions';
import CategoryForm from '../category/category-form/category-form';
import CategoryItem from '../category/category-item/category-item';

class Dashboard extends React.Component {
  render() {
    return (
      <section>
        <h1>Budget Tracker</h1>

        <CategoryForm buttonText="create" onComplete={this.props.dashboardCategoryCreate} />

        {this.props.categories ? 
          this.props.categories.map(cat => <CategoryItem key={cat._id} category={cat} buttonText="delete" />)
          :
          undefined  
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: cat => dispatch(categoryCreate(cat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);