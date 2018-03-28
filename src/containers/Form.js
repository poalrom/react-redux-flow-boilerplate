// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertAndSaveSettings } from '../actions/user';
import Button from '../components/button/Button';
import UserSettingsInterface from '../interfaces/dto/UserSettingsInterface';

function mapStateToProps(state) {
  return { ...state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    saveSettings: settings => dispatch(alertAndSaveSettings(settings)),
  };
}

type Props = {
  saveSettings: UserSettingsInterface => void,
};

class Form extends Component<Props, UserSettingsInterface> {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  handleInput = (name: string, value: string) => {
    this.setState({ [name]: value });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.saveSettings(this.state);
  };

  render() {
    return (
      <form
        onSubmit={e => {
          this.submitForm(e);
        }}
      >
        <div>
          <label htmlFor="name">
            Имя <br />
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={e => {
                this.handleInput('name', e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email <br />
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={e => {
                this.handleInput('email', e.target.value);
              }}
            />
          </label>
        </div>
        <br />
        <Button type="submit">Сохранить</Button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
