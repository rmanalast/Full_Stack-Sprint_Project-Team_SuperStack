import { useState, useEffect } from "react";
import WishListForm from "../../common/forms/WishListForm/WishListForm";
import BoxItems from "../../common/item_populator/item_populator";
import type { Inventory } from "../../../data/itemsList";
import "./WishlistPage.css";

import { wishlistRepo } from "../../../repository/wishlistRepo";

function WishlistPage({
  itemList,
  itemUpdater
}: {
  itemList: Inventory[];
  itemUpdater: React.Dispatch<React.SetStateAction<Inventory[]>>;
}) {
  
  const [notifications, setNotifications] = useState<string[]>([]);

  // Load saved emails from backend (I.4)
  useEffect(() => {
    async function loadSavedNotifications() {
      try {
        const data = await wishlistRepo.getAll();
        // backend returns array of wishlist rows → map emails
        setNotifications(data.map((entry: any) => entry.email));
      } catch (error) {
        console.error("Error loading wishlist:", error);
      }
    }

    loadSavedNotifications();
  }, []);

  //
  const handleRemove = (emailToRemove: string) => {
    setNotifications(prev => prev.filter(email => email !== emailToRemove));
  };

  //
  const handleAddEmail = async (email: string) => {
    try {
      await wishlistRepo.addEmail(email);
      setNotifications(prev => [...prev, email]);
    } catch (err) {
      console.error("Failed to save email:", err);
      alert("Could not save email to server.");
    }
  };

  return (
    <section className="wish-list-page">
      <header>
        <h1>WishList</h1>
      </header>

      <main>
        <BoxItems
          itemsList={itemList}
          itemUpdater={itemUpdater}
          sortingtype={true}
          listVal="isWishListed"
          allowRemove={true}
        />
        List of items in your wishlist.

        {/* Pass the new handler to form */}
        <WishListForm
          {...({ notifications, setNotifications, saveToBackend: handleAddEmail } as any)}
        />

        <h2>Notifications List</h2>
        {notifications.length === 0 ? (
          <p>No emails signed up yet.</p>
        ) : (
          <ul>
            {notifications.map((email) => (
              <li key={email}>
                {email}
                <button onClick={() => handleRemove(email)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </main>
    </section>
  );
}

export default WishlistPage;