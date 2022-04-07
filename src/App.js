import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  return (
    <Routes>
      {user && <Route path="/" exact element={<Main />} />}


      {!user && <Route path="/signup" exact element={<Signup />} />}
      {!user && <Route path="/login" exact element={<Login />} />}

      {!user && <Route path="/" element={<Navigate replace to="/login" />} />}
      {user && <Route path="/login" element={<Navigate replace to="/" />} />}
      {user && <Route path="/signup" element={<Navigate replace to="/" />} />}
    </Routes>
  );
}

export default App;
