import Profile from "./Components/Profile.jsx";
import Intro from "./Components/Intro.jsx";
import {useContext} from "react";
import UserContext from "./Context/UserContext";
function App() {
  const {setUser } = useContext(UserContext);
  function loginHandler() {
    setUser({
      name: "John Doe",
      email: "sujeethonnappagol33@gmail.com",
      img: "https://images.unsplash.com/photo-1682685794700-1e7f3c5d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    })
  }
  return (
    <>
      <div className="border-b mx-auto max-w-4xl">
        <div className="flex justify-between mx-auto border-blue-500 items-center">
          <h2>Context API</h2>
          <div className="">
            <Intro />
            <button onClick={loginHandler} className="">Login</button>
          </div>
        </div>
      </div>
      <div className="mt-44 mx-auto max-w-4xl">
        <Profile />
      </div>
    </>
  )
}

export default App;