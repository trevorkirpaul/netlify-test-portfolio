import React, { Component } from 'react';

import Wrapper from 'components/Wrapper';
import TitlePanel from 'components/TitlePanel';
import Field from 'components/Field';

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
    };
  }

  handleOnChange = ({ target: { value, name } }) => {
    return this.setState({ [name]: value });
  };

  render() {
    return (
      <Wrapper>
        <TitlePanel
          title="Send Email"
          subTitle="Complete this form to send me an email"
        />

        {createFields(this.state, this.handleOnChange).map(field => (
          <Field key={field.name} {...field} />
        ))}
      </Wrapper>
    );
  }
}

export default SendEmail;
