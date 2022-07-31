import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../redux/actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import Nav from './Nav';
import NewPollPage from './NewPollPage';
import PollPage from './PollPage';
import Leaderboard from './Leaderboard';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      {props.authedUser ? (
        <>
          <Nav />
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/leaderboard" element={<Leaderboard />}></Route>
            <Route path="/add" element={<NewPollPage />}></Route>
            <Route path="/poll/:id" element={<PollPage />}></Route>
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
