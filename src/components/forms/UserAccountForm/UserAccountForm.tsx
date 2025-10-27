import React from "react";
import { useFormValidation } from "../../../hooks/userFormValidation";
import { userAccount } from "../../../repository/usersAccount";

export function UserAccountForm() {
  const {
    values,
    errors,
    handleChange,
    resetForm,
  } = useFormValidation({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  // Simulate adding a new user to our test data repository
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newUser = userAccount.createUserAccount(
        values.firstName,
        values.lastName,
        values.username,
        values.email,
        values.password
      );
      
      console.log("New user created:", newUser);
      resetForm();
    };

      return (
    <form onSubmit={handleFormSubmit} className="user-account-form">
        <h2>Create User Account</h2>

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <label>Username</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Create Account</button>
    </form>
  );
}

export default UserAccountForm;