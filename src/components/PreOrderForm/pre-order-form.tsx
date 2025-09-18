import React, { useState } from 'react';
import "./pre-order-form.css";

const PreOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Pre-Order Form submitted:", formData);
    alert("Pre-Order Form submitted! (mock only for Sprint 1)");
  };

  return (
    <section className="pre-order-form">
      <h2>Pre-Order Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="Game">Game</option>
            <option value="Movie">Movie</option>
          </select>
        </label>

        {/* Conditionally show title input */}
        {formData.category && (
          <label>
            {formData.category} Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
        )}

        <button type="submit">Submit Pre-Order</button>
      </form>
    </section>
  );
};

export default PreOrderForm;