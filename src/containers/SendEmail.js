import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as emailActions from '@redux/actions/email';
import Wrapper from 'components/Wrapper';
import TitlePanel from 'components/TitlePanel';
import Field from 'components/Field';
import Button from 'components/Button';

const createFields = (state, onChange) => [
  {
    name: 'email',
    type: 'text',
    value: state.email,
    onChange,
    placeholder: 'enter your email',
  },
  {
    name: 'subject',
    type: 'text',
    value: state.subject,
    onChange,
    placeholder: 'enter subject',
  },
  {
    name: 'body',
    type: 'text',
    value: state.body,
    onChange,
    placeholder: 'enter email message',
  },
];

class SendEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      subject: '',
      body: '',
      error: '',
    };
  }

  handleOnChange = ({ target: { value, name } }) => {
    return this.setState({ [name]: value });
  };

  handleOnSubmit = () => {
    const { email, subject, body } = this.state;
    const { actions } = this.props;

    if ((!email, !subject, !body)) {
      return this.setState({ error: 'please complete this form' });
    }

    this.setState({ email: '' });

    return actions.email.startSendEmail({ email, subject, body });
  };

  render() {
    const { data } = this.props;
    return (
      <Wrapper>
        <TitlePanel
          title="Send Email"
          subTitle="Complete this form to send me an email"
        />

        {createFields(this.state, this.handleOnChange).map(field => (
          <Field key={field.name} {...field} />
        ))}

        <Button label="Send email" onClick={this.handleOnSubmit} />
      </Wrapper>
    );
  }
}

const mapState = state => ({
  data: {
    email: state.email,
  },
});

const mapDispatch = dispatch => ({
  actions: {
    email: bindActionCreators(emailActions, dispatch),
  },
});

export default connect(
  mapState,
  mapDispatch
)(SendEmail);
