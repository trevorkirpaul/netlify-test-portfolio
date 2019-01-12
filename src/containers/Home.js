import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';

import * as blogActions from '@redux/actions/blogs';

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
      <div>
        {allBlogs &&
          allBlogs.map(blog => (
            <ReactMarkdown key={blog.id} source={blog.body} />
          ))}
      </div>
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
