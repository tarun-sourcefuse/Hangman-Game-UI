import React, { Fragment } from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = ({ user }) => ({ user });

const Layout = ({ children, user }) => {
  let { pathname } = useLocation();
  let history = useHistory();

  //check if logged in
  if (pathname !== '/login' && !user?.email) history.push('/login');

  return <Fragment>{children}</Fragment>;
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.element.isRequired,
};

export default withRouter(connect(mapStateToProps)(Layout));
