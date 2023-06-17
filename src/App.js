import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Login from '../src/pages/login/Login'

function App() {
  return (
   <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
