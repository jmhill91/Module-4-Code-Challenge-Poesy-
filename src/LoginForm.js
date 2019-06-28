import React from 'react';

class LoginForm extends React.Component {




  render(){
    ;
    return (
      <div className="login">
        <form
          onSubmit={this.props.submit}
           className="login-form">
          <input
            onKeyUp={this.props.type}
            placeholder="Enter a username..." />
          <input
            type="submit" value="Log In"/>
        </form>
      </div>
    );
  }
}

export default LoginForm;
