import "./rentalForm.css";
import { type Rental } from "../../data/rentals";
import { RentalPopulator } from "./rentalPopulator";
import { useFormValidation } from "../../hooks/userFormValidation";

export function RentalForm({
  r,
  onClick, // toggle isSelected
  onSubmit, // toggle isRented
}: {
  r: Rental[];
  onClick: (sku: number) => void;
  onSubmit: (sku: number) => void;
}) {
  const selected: Rental[] = r.filter(
    (s) => s.isSelected === true && s.isRented === false
  );

  // Use form validation for name and email
  const { values, errors, handleChange, validateAllFields, resetForm } =
    useFormValidation({
      name: "",
      email: "",
    });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate name and email
    const valid = validateAllFields();
    if (!valid) {
      alert("Please fix the errors before submitting.");
      return;
    }

    console.log("Submitted:", values);

    // Call onSubmit for each selected rental
    r.map((s) => {
      const i = selected.find((sel) => sel.sku === s.sku);
      if (i) {
        onSubmit(i.sku);
      }
    });

    resetForm();
  };

  return (
    <section className="rentals-page">
      <form onSubmit={handleSubmitForm}>
        <h2>Rental Sign Out Form</h2>
        <div>
          <RentalPopulator
            message={"No Rentals Selected"}
            r={selected}
            onClick={async (id: number) => {
              await onClick(id);
            }}
          ></RentalPopulator>
        </div>

        <label htmlFor="selector">Select Length of Time</label>
        <select className="periodRental" id="selector">
          <option value="" hidden>
            {" "}
            -- Select an option --{" "}
          </option>
          <option>7 days</option>
          <option>14 days</option>
          <option>30 days</option>
        </select>

        <label htmlFor="name">Enter your name</label>
        <input
          className="rentalInput"
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Enter your email</label>
        <input
          className="rentalInput"
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <button className="rentalButton" type="submit">
          submit
        </button>
      </form>
    </section>
  );
}