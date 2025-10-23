import {RentalForm} from "../components/rentals/rentalForm"
import {RentalPopulator} from "../components/rentals/rentalPopulator"
import { RentalProvider } from "../hooks/useRental"

// Rentals page to populate available rentals and add them to cart. anything with rentalCart true
export function Rentals() {

    return (
    <RentalProvider>
            <>
            <section>
            <RentalPopulator
            /> 
            </section>
            <RentalForm ></RentalForm>
            </>    
        </RentalProvider>
    )
    }