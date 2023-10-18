import React from "react";
import LoginScreen from "./Components/Login/LoginScreen";
import BlogsClass from "./Components/Blogs/BlogsClass";

const App = () => {
  return (
    <div>
      <div>
        <h1>Blogs Application</h1>
      </div>
      <div>
        <LoginScreen />
        <BlogsClass />
      </div>
    </div>
  );
}

export default App;
