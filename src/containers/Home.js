import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import styled, { keyframes } from 'styled-components';

import * as blogActions from '@redux/actions/blogs';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div``;

const LoadingWrapper = styled.div`
  text-align: center;
`;

const I = styled.i`
  animation: ${rotate} 1s linear infinite;
`;

class Home extends Component {
  componentDidMount() {
    this.props.actions.blogActions.startFetchAllBlogs();
  }
  render() {
    const {
      data: {
        blogs: { allBlogs },
      },
    } = this.props;

    return (
      <Wrapper>
        {allBlogs ? (
          allBlogs.map(blog => (
            <ReactMarkdown key={blog.id} source={blog.body} />
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
