import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    return (
      <div className='field'>
        <label>{label}</label>
        <input type='text' {...input} />
        <div>{meta.error}</div>
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'
      >
        <Field name='title' component={this.renderInput} label='Enter title' />
        <Field
          name='description'
          component={this.renderInput}
          label='Enter description'
        />
        <button className='ui button primary' type='submit'>
          Create
        </button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must input title!'
  }

  if (!formValues.description) {
    errors.description = 'You must input description!'
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate)
