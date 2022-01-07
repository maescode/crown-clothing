import React, { Component } from 'react';
import './sign-up.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <>
        <div className='sign-up'>
          <h2 className='titel'>I do not have a account</h2>
          <span className=''>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              label='Name'
              value={displayName}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type='email'
              name='email'
              label='Email'
              value={email}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              type='password'
              name='password'
              label='Password'
              value={password}
              handleChange={this.handleChange}
              required
            />

            <FormInput
              type='password'
              name='confirmPassword'
              label='Confirm Password'
              value={confirmPassword}
              handleChange={this.handleChange}
              required
            />

            <CustomButton type='submit'>Sign Up</CustomButton>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
