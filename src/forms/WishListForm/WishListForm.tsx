import { useState } from "react";

/* This is the form component for users to sign up for notifications about wishlist items. */

// Props for the WishListForm component
type WishListFormProps = {
  notifications: string[];
  setNotifications: React.Dispatch<React.SetStateAction<string[]>>;
};

function WishListForm({ notifications, setNotifications }: WishListFormProps) {
  // Local state for the form input
  const [email, setEmail] = useState("");

  // Handler for form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation: check if email is not empty and has an @
    if (email.trim() === "" || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Prevent duplicates
    if (notifications.includes(email)) {
      alert("This email is already signed up for notifications.");
      return;
    }

    // Update parent state with new email
    setNotifications([...notifications, email]);

    // Clear the input field
    setEmail("");
  };

  // Remove email from the list
  const handleRemove = (emailToRemove: string) => {
    setNotifications(notifications.filter((n) => n !== emailToRemove));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email to sign up for notifications:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>

      <ul>
          {notifications.map((n) => (
            <li key={n}>
              {n}{" "}
              <button onClick={() => handleRemove(n)} style={{ marginLeft: "0.5rem" }}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default WishListForm;