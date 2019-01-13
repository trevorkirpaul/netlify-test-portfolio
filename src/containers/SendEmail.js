import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import * as emailActions from '@redux/actions/email';
import Wrapper from 'components/Wrapper';
import TitlePanel from 'components/TitlePanel';
import Field from 'components/Field';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { ErrorText } from 'components/Text';

/**
 * Styles
 */

const TextWrapper = styled.div`
  margin-bottom: 15px;
`;

const FormWrapper = styled.div`
  margin: 15px;
`;

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

    if (!email || !subject || !body) {
      return this.setState({ error: 'please complete this form' });
    }

    this.setState({ error: '' });

    return actions.email.startSendEmail({ email, subject, body });
  };

  handleDone = () => {
    const { actions, history } = this.props;

    /**
     * We'll clear values in redux that render the completion modal
     * and then push navigation back to the home view
     */

    actions.email.completeAndReturn();

    return history.push('/');
  };

  render() {
    const { data } = this.props;
    const { error } = this.state;
    return (
      <Wrapper>
        <Modal isOpen={data.email.successfullySent} title="Success">
          <TextWrapper>
            <span>Email successfully sent</span>
          </TextWrapper>
          <Button onClick={this.handleDone}>Return Home</Button>
        </Modal>
        <TitlePanel
          title="Send Email"
          subTitle="Complete this form to send me an email"
        />

        <FormWrapper>
          {createFields(this.state, this.handleOnChange).map(field => (
            <Field key={field.name} {...field} />
          ))}

          {error && (
            <TextWrapper>
              <ErrorText>{error}</ErrorText>
            </TextWrapper>
          )}
          <Button
            label="Send email"
            onClick={this.handleOnSubmit}
            loading={data.email.loading}
          />
        </FormWrapper>
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
