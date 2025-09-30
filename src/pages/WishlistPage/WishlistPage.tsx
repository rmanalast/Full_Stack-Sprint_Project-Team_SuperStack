import { useState } from "react";
import WishListForm from "../../forms/WishListForm/WishListForm";

/* This is the wishlist page where users can view and manage their saved notification emails. */

function WishlistPage() {
  // State to hold notification emails
  const [notifications, setNotifications] = useState<string[]>([]);

  return (
    <section className="wish-list-page">
      <header>
        <h1>WishList</h1>
      </header>

      <main>
        <p>
          This is the feature page for users to add items to their wish list and
          sign up for notifications.
        </p>

        {/* I.2: Form Component */}
        <WishListForm
          notifications={notifications}
          setNotifications={setNotifications}
        />

        {/* I.3: Element Addition/Removal will go here later */}

        {/* Display the current list of signed-up emails */}
        <div className="notification-list">
          <h2>Signed-up Emails</h2>
          {notifications.length === 0 ? (
            <p>No emails signed up yet.</p>
          ) : (
            <ul>
              {notifications.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </section>
  );
}

export default WishlistPage;