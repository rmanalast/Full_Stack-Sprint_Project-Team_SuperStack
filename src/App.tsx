import Landing  from "./components/landing/landing";
import "./App.css";
import { Layout } from "./components/common/layout/layout";
import {Rentals} from "./pages/Rental.js";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import InventoryList from "./data/itemsList.js";

function App() {
  const [inventory, updateInventory] = useState(InventoryList)
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
            <Route path="rental" element={<Rentals RentalList={inventory}  setRental={updateInventory}/>}/>
            <Route path="cart" />
          </Route>
      </Routes>
  );
};
export default App;