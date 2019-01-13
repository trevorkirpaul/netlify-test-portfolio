import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import styled, { keyframes } from 'styled-components';
import moment from 'moment';

import CodeBlock from 'components/CodeBlock';
import * as blogActions from '@redux/actions/blogs';
import Wrapper from 'components/Wrapper';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const I = styled.i`
  animation: ${rotate} 1s linear infinite;
`;

const StyledDate = styled.h2`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 0px;
  padding-bottom: 5px;
`;

const PostWrapper = styled.div`
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid palevioletred;
`;

class Home extends Component {
  componentDidMount() {
    this.props.actions.blogActions.startFetchAllBlogs();
  }
  render() {
    const {
      data: {
        blogs: { allBlogs, loading },
      },
    } = this.props;

    return (
      <Wrapper>
        {allBlogs || loading ? (
          allBlogs.map(blog => (
            <PostWrapper key={blog.id}>
              <ReactMarkdown
                source={blog.body}
                renderers={{
                  code: CodeBlock,
                }}
              />
              <StyledDate>
                {moment(blog.createdAt).format('MMMM Do, YYYY')}
              </StyledDate>
            </PostWrapper>
          ))
        ) : (
          <LoadingWrapper>
            <I className="fas fa-circle-notch" />
          </LoadingWrapper>
        )}
      </Wrapper>
    );
  }
}

const mapState = state => ({ data: { blogs: state.blogs } });

const mapDispatch = dispatch => ({
  actions: {
    blogActions: bindActionCreators(blogActions, dispatch),
  },
});

export default connect(
  mapState,
  mapDispatch
)(Home);
