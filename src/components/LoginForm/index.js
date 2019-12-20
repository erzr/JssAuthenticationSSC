import React from 'react';
import queryString from 'query-string';
import config from '../../temp/config';
import { Redirect } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false,
      invalid: false,
      requesting: false
    }

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormFieldChange(e) {
    e.preventDefault();

    const {id, value} = e.target;

    this.setState({
      [id]: value
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.setState({
      requesting: true
    })

    const payload = {
      domain: 'extranet',
      username: this.state.username,
      password: this.state.password
    }

    const host = `${config.sitecoreApiHost}/sitecore/api/ssc/auth/login?sc_apikey=${config.sitecoreApiKey}`;

    fetch(host, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      method: 'POST',
      body: queryString.stringify(payload),
    }).then(({ ok }) => {
      if (ok) {
        this.setState({
          success: true
        })
      } else {
        this.setState({
          invalid: true,
          requesting: false
        })
      }
    });
  }

  render() {
    if (this.state.success) {
      return <Redirect to="/" />;
    }

    return (
      <div className="row">
        <div className="col-md-6">
          {this.state.invalid && 
            <div className="alert alert-danger" role="alert">
              Invalid Username or Password
            </div>
          }
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username"
                value={this.state.username} onChange={this.handleFormFieldChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password"
                value={this.state.password} onChange={this.handleFormFieldChange} required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={this.state.requesting}>Submit</button>
          </form>
        </div>
      </div>
    );
  }

}

export default LoginForm;