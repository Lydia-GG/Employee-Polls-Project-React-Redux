import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../redux/actions/shared';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return <div>Hello from app</div>;
}

export default connect()(App);
