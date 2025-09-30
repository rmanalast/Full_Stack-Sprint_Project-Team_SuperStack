import { useState } from "react";
import WishListForm from "../../forms/WishListForm/WishListForm";

/* This is the wishlist page where users can view and manage their saved notification emails. */

function WishlistPage() {
  // State to hold notification emails
  const [notifications, setNotifications] = useState<string[]>([]);

  // Handler to remove an email from the list
  const handleRemove = (emailToRemove: string) => {
    setNotifications(prev => prev.filter(email => email !== emailToRemove));
  };

  return (
    <section className="wish-list-page">
      <header>
        <h1>WishList</h1>
      </header>
      <main>
        <p>
          This is the feature page for users to add items to their wish list.
        </p>

        {/* I.2 Form Component */}
        <WishListForm
          notifications={notifications}
          setNotifications={setNotifications}
        />

        {/* I.3 Element Addition/Removal */}
        <h2>Notifications List</h2>
        {notifications.length === 0 ? (
          <p>No emails signed up yet.</p>
        ) : (
          <ul>
            {notifications.map(email => (
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