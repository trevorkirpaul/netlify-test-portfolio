import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as blogActions from '@redux/actions/blogs';

class Home extends Component {
  componentDidMount() {
    this.props.actions.blogActions.startFetchAllBlogs();
  }
  render() {
    return (
      <div>
        <h1>trevorKIRPAUL</h1>
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
