import Rental from "../../data/itemsList"
import { RentalSelected } from "./rentalSelected"

import "./rentalForm.css"


export function RentalForm({
        rentalInventory,
        updateSelected,
    }:
    {
        rentalInventory: Inventory[],
        updateSelected: React.Dispatch<React.SetStateAction<Rental[]>>,
    }
) {

    const handleSubmit = (e: React.FormEvent) => {

        console.log("Submitted");

    const updatedRentals = rentalInventory.map((rental) => {
        const isSelected = selected.find(sel => sel.sku === rental.sku);
            if (isSelected) {
            return {
                ...rental,
                rented: { ...rental.rented, isRented: true}
            };
            }
        return rental;
    });

    updateSelected(updatedRentals);
    e.preventDefault();
    };


    const handleButtonClick = (rentalClicked: Inventory): void => {
        updateSelected(oldSelectedState => {
            // map the array to copy it, modifying if we need to
            return oldSelectedState.map(t => {
                /**
                 * If our clicked ID matches the mapped term, we return
                 * a destructuring of that object, but with the updated
                 * "favourite" property value
                 */
                if(t.sku === rentalClicked.sku) {
                    const newSelected = !t.rented.isSelected;
                    return {...t, rented: { ...t.rented , isSelected: newSelected}};
                } else {
                    // if not, we just return the original object for mapping.
                    return t;
                }
            })
        });
    };

    const selected: Inventory[] = rentalInventory.filter((rentals) => rentals.rented.isSelected == true && rentals.rented.isRented == false)

    return (
        <section className="rentals-page">
            <form onSubmit={handleSubmit}>
                <h2>Rental Sign Out Form</h2>
                <div className="FormPage">
                    {selected.map((rental) => 
                        <div className="rentalsChild"key={rental.sku}>
                            <RentalSelected selectedRental={rental} onClick={() => {handleButtonClick(rental)}} ></RentalSelected>
                        </div>
                    )}

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