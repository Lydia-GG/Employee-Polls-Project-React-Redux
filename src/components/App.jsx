import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../redux/actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import Nav from './Nav';
import NewPollPage from './NewPollPage';
import PollCard from './PollCard';
import PollPage from './PollPage';
import Leaderboard from './Leaderboard';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  console.log(props);
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        {/* {props.loading === true ? null : <Dashboard />} */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" exact element={<Dashboard />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/new" element={<NewPollPage />}></Route>
        <Route path="/poll/:id" element={<PollPage />}></Route>
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({ loading: authedUser === null });

export default connect(mapStateToProps)(App);
