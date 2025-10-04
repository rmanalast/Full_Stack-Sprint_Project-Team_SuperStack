import Landing  from "./components/landing/landing";
import "./App.css";
import { Layout } from "./components/common/layout/layout";
import WishlistPage from "./pages/WishlistPage/wishlistPage.tsx";
import InventoryList from "./data/itemsList";

import { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
    const [inventory, updateInventory] = useState(InventoryList);
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
            <Route path="wishlist" element={<WishlistPage itemList={inventory} itemUpdater={updateInventory}/>}/>
            <Route path="rental" />
            <Route path="cart" />
          </Route>
      </Routes>
  );
};
export default App;