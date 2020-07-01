import React, { useContext } from 'react';
import { auth, signInWithGoogle } from './firebase/init';

import UserContext from './context/userContext';

import './App.css';

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>App</h1>
      <button type="button" onClick={user ? () => auth.signOut() : signInWithGoogle}>
        {user ? 'Sign Out' : 'Sign In'}
      </button>
      {user && <h1>{user.displayName}</h1>}
    </div>
  );
};

export default App;
