import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/">
        <h1>React Router 6 Tutorial</h1>
      </Route>
    </Routes>
    
  </BrowserRouter>;
}

export default App;
