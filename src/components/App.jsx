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
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      <>
        {props.authedUser && <Nav />}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/leaderboard"
            element={
              <PrivateRoute>
                <Leaderboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <NewPollPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/poll/:id"
            element={
              <PrivateRoute>
                <PollPage />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
        </Routes>
      </>
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
