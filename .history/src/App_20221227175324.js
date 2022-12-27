import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
