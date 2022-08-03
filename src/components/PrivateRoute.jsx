import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authedUser, children }) => {
  return authedUser ? children : <Navigate to="/login" />;
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
