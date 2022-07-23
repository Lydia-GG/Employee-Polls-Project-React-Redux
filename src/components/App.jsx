import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../redux/actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import Nav from './Nav';
import NewPollPage from './NewPollPage';
import PollCard from './PollCard';
import PollPage from './PollPage';

function App(props) {
  console.log(props);
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return <div>{props.loading === true ? null : <Dashboard />}</div>;
}

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });

export default connect(mapStateToProps)(App);
