import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';

import * as routes from '../constants/routes';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});
const SignUp = ({history}) =>
  <div>
    <h1> SignUp</h1>
    <SignUpForm history={history}/>
  </div>


const INITITAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};
class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { ...INITITAL_STATE };
  }

  onSubmit = (event) => {

    const{
      username,
      email,
      passwordOne
    } = this.state;

    const {
      history
    } = this.props;


    auth.doCreateUsersWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITITAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();


    console.log('submitted');
  }

  render(){

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const Invalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return(
      <div>
        <h2>hi!</h2>
      <form onSubmit={this.onSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"
         />
        <input
        value={passwordOne}
        onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
        type="password"
        placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={Invalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    </div>
    )
  }
}

const SignUpLink = () =>
  <p>
    Dont have an account yet?
    { ' ' }
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>


export default withRouter(SignUp);


export { SignUpForm, SignUpLink };
