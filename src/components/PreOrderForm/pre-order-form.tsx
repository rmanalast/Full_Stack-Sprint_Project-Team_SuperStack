import React from "react";
import "./pre-order-form.css";
import { useFormValidation } from "../../hooks/userFormValidation";

const PreOrderForm = () => {
  const {
    values,
    errors,
    handleChange,
    validateAllFields,
    resetForm,
  } = useFormValidation({
    name: "",
    category: "",
    title: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = validateAllFields();

    if (hasErrors) {
      alert("Please fix the errors before submitting.");
      return;
    }

    console.log("Pre-Order Form submitted:", values);
    alert("Pre-Order Form submitted successfully!");
    resetForm();
  };

  return (
    <section className="pre-order-form">
      <h2>Pre-Order Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        {/* Category */}
        <label>
          Category:
          <select
            name="category"
            value={values.category}
            onChange={(e) =>
              handleChange(e as unknown as React.ChangeEvent<HTMLInputElement>)
            }
          >
            <option value="">-- Select Category --</option>
            <option value="Game">Game</option>
            <option value="Movie">Movie</option>
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
        </label>

        {/* Title (conditional) */}
        {values.category && (
          <label>
            {values.category} Title:
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && <span className="error">{errors.title}</span>}
          </label>
        )}

        <button type="submit">Submit Pre-Order</button>
      </form>
    </section>
  );
};

export default PreOrderForm;