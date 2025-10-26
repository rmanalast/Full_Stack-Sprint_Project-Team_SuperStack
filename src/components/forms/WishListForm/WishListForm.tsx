import React from "react";
import { useFormValidation } from "../../../hooks/userFormValidation";

type WishListFormProps = {
  notifications: string[];
  setNotifications: React.Dispatch<React.SetStateAction<string[]>>;
};

const WishListForm: React.FC<WishListFormProps> = ({
  notifications,
  setNotifications,
}) => {
  // Use the custom validation hook
  const {
    values,
    errors,
    handleChange,
    validateAllFields,
    resetForm,
  } = useFormValidation({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = validateAllFields();

    if (hasErrors) {
      alert("Please fix the errors before submitting.");
      return;
    }

    const email = values.email.trim();

    // Prevent duplicates
    if (notifications.includes(email)) {
      alert("This email is already signed up for notifications.");
      return;
    }

    // Update parent state with new email
    setNotifications([...notifications, email]);
    alert("You’ve successfully signed up for notifications!");
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="wishlist-form">
      <h2>Wish List Notifications</h2>

      <label>
        Enter your email:
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default WishListForm;