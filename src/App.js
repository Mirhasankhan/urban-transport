import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Destination from './Components/Destination/Destination';
import Header from './Components/Header/Header';
// import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from '../src/Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
      <h2>Email: {loggedInUser.email}</h2>
      <Header/>
      <Routes>
       <Route path="/login" element={<Login/>}></Route>
      <Route path="destination" element={
      <PrivateRoute>
        <Destination/>
      </PrivateRoute>}>        
      </Route>
      </Routes>      
    </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
