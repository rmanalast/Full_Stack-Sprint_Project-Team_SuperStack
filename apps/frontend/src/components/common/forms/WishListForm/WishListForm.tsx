import React from "react";
import { useFormValidation } from "../../../../hooks/userFormValidation";
import { wishlistRepo } from "../../../../repository/wishlistRepo";

type WishListFormProps = {
  notifications: string[];
  setNotifications: React.Dispatch<React.SetStateAction<string[]>>;
};

const WishListForm: React.FC<WishListFormProps> = ({
  notifications,
  setNotifications,
}) => {
  const {
    values,
    errors,
    handleChange,
    validateAllFields,
    resetForm,
  } = useFormValidation({
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const valid = validateAllFields();
    if (!valid) {
      alert("Please fix the errors before submitting.");
      return;
    }

    const email = values.email.trim();

    try {
      const savedEntry = await wishlistRepo.addEmail(email);

      setNotifications([...notifications, savedEntry.email]);

      alert("You've successfully signed up for notifications!");

      resetForm();
    } catch (error) {
      console.error(error);
      alert("Error saving email. Please try again.");
    }
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