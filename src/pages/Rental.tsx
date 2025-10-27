import {RentalForm} from "../components/rentals/rentalForm"
import {RentalPopulator} from "../components/rentals/rentalPopulator"
import { useRental } from "../hooks/useRental"

// Rentals page to populate available rentals and add them to cart. anything with rentalCart true
export function Rentals() {


    // SET HOOK 
    const {
        rentals,
        toggleRented,
        toggleSelected
    } = useRental()
    return (
            <>
            <section>
                <h2>Available Rentals</h2>
            <RentalPopulator message={"No Rentals Available"}r={rentals} onClick={async (id: number) => {await toggleSelected(id);}}
            /> 
            </section>
            <RentalForm r={rentals} onClick={async (id: number) => {await toggleSelected(id);}} onSubmit={async (id: number) => {await toggleRented(id);}}></RentalForm>
            </>    
    )
    }