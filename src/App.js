import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from '../src/pages/login/Login'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
