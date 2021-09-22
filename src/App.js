import React, { useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);

  //dispatch allows us to shoot things into the data layer/redux from any component
  const dispatch = useDispatch();
  //this code runs only when dispatch is called
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //log in user
        //pushing data into REDUX
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //log out user (setting user to null)
        dispatch(logout());
      }
    });
  }, [dispatch]);

  //if the user is logged in then only we render the app else LogIn screen
  return (
    <div className="app">
      {/*<Sidebar />
      <Chat />*/}
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
