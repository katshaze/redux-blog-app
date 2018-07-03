import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> {title: 'sdks', categories: 'sldkjf', content: 'slkjfd'}
  const errors = {};
  // logic to validate the inputs from 'values' object
  if (!values.title || values.title.length < 3) {
    errors.title = "Please enter a title that is at least three characters";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }
  // if errors is empty, redux-form knows the form is fine to submit
  // if errors has any properties, redux-form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
// instead of matchStateToProps and matchDispatchToProps going in here as two arguments, we give one function,
// that takes a number of configuration options
// i.e. the form property, which is the name of the form, that takes a unique string for the relevant form

// reduxForm is a function, very similar to the connect helper from react-redux
// reduxForm helps us communicate with that redux form reducer we wired in in index.js in the reducers folder

// component prop of Form tells us what jsx to provide to the user. Put a function in there for Field
// component to call later on when needed.
// Need to include the field param so that if a user makes a changes to the input, the Field component knows
// field.input is an object that has various methods etc. which we are grabbing them all (using fancy jsx)
// and giving them as props to the <input> tag. rather than, e.g., onChange-{field.input.onChange} and
// onFocus={field.input.onFocus} etc. etc.

// name and label props are different because label can be whatever you like and can be long and change etc.,
// but label needs to stay the same and will be referenced when using the validate function

// redux-form has validation in-built. the function will be called as soon as the user tries to
// submit the form.
