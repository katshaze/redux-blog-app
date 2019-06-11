import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // this === our component
    // so since it gets calle async by handleSubmit we bind it to 'this' to make sure the 'this'
    // we mean is not lost
    // console.log(values);

    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
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
})(
  connect(null, { createPost })(PostsNew)
);
// instead of matchStateToProps and matchDispatchToProps going in here as two arguments, we give one function,
// that takes a number of configuration options
// i.e. the form property, which is the name of the form, that takes a unique string for the relevant form

// reduxForm is a function, very similar to the connect helper from react-redux
// reduxForm helps us communicate with that redux form reducer we wired in in index.js in the reducers folder
// it also comes with a bunch of inbuilt properties that are passed to our component
// e.g. handleSubmit has been passed to the PostsNew component on behalf of reduxForm
// handleSubmit does the redux-form side of things hwich to check check that the form is valid
// before submitting, whereas onSubmit is a funciton we've defined and tod handleSubmit to call
// if all looks good with the form

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

// once we also bring in connect from react-redux (in order to connect to our action of creating a
// new post), we have two helpers. so need to wire them up together
