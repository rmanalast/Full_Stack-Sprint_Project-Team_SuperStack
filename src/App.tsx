//Ap.tsx
import Landing  from "./components/landing/landing";
import "./App.css";
import { Layout } from "./components/common/layout/layout";
import WishlistPage from "./pages/WishlistPage/WishlistPage.tsx";
import InventoryList from "./data/itemsList.js";
import {Rentals} from "./pages/Rental.js";
import { ContactForm } from "./components/cart/CartForm";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";



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

            <Route index element={<Landing itemList={inventory} itemUpdater={updateInventory} />} />
            <Route path="inventory" />
            <Route path="wishlist" element={<WishlistPage itemList={inventory} itemUpdater={updateInventory}/>}/>
            <Route path="rental" element={<Rentals/>}/>
            <Route path="cart" element={<ContactForm/>} />
          </Route>
      </Routes>
  );
};
export default App;