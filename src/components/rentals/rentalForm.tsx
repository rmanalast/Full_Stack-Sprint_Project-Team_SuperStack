import { RentalSelected } from "./rentalSelected"

import "./rentalForm.css"
import { useRental } from "../../hooks/useRental";
import { type Rental } from "../../data/rentals";


export function RentalForm() {

    const {
        rentals,
        updateRentals,
    } = useRental()

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted");

    const updatedRentals = rentals.map((rental) => {
        const isSelected = selected.find(sel => sel.sku === rental.sku);
            if (isSelected) {
            return {
                ...rental, isRented: true
            };
            }
        return rental;
    });

    updateRentals(updatedRentals);
    };

    const selected: Rental[] = rentals.filter((rentals) => rentals.isSelected == true && rentals.isRented == false)

    return (
        <section className="rentals-page">
            <form onSubmit={handleSubmit}>
                <h2>Rental Sign Out Form</h2>
                <div className="FormPage">
                    <RentalSelected></RentalSelected>
                    </div>
                    <label htmlFor="selector">Select Length of Time</label>
                    <select className="periodRental" id="selector">
                        <option value="" hidden> -- Select an option -- </option>
                        <option>7 days</option>
                        <option>14 days</option>
                        <option>30 days</option>
                    </select>

                    <label htmlFor="name">Enter your name</label>
                    <input className="rentalInput"type="text" id="name"required={true}></input>

                    <label htmlFor="email">Enter your email</label>
                    <input className="rentalInput"type="email" id="email"required={true}></input>
                    <button className="rentalButton"type="submit" onSubmit={handleSubmit}>submit</button>
            </form>
        </section>
    )
};