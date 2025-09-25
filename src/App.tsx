import Landing  from "./components/landing/landing";
import "./App.css";
import { Layout } from "./components/common/layout/layout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
          {/* The root path renders <Layout>. That component contains an <Outlet>
          which will render the elements of their child routes. */}
          <Route path="/" element={<Layout/>}>
            {/* 
              Renders the different pages in the Layout. 
              index: indicates route at the root of this path (/)
            */}
            <Route index element={<Landing />} />

            <Route path="inventory" />
            <Route path="wishlist" />
            <Route path="rental" />
            <Route path="cart" />
          </Route>
      </Routes>
  );
};
export default App;