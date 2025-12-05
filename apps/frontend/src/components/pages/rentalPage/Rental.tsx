import {RentalForm} from "../../common/rentals/rentalForm"
import {RentalPopulator} from "../../common/rentals/rentalPopulator"
import { useRental } from "../../../hooks/useRental"
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
import { RentalHistory } from "../../../components/common/rentals/rentalHistory"

// Rentals page to populate available rentals and add them to cart. anything with rentalCart true
export function Rentals() {


    // SET HOOK 
    const {
        rentals,
        toggleRented,
        toggleSelected,
        history
    } = useRental()
    return (
            <>
            <section>
                <h2>Available Rentals</h2>
            <RentalPopulator message={"No Rentals Available"}r={rentals} onClick={async (id: number) => {await toggleSelected(id);}}
            /> 
            <SignedOut>
                <h2>Sign in to book rentals</h2>
                <SignInButton>Here</SignInButton>
            </SignedOut>
            <SignedIn>
                <RentalForm r={rentals} onClick={async (id: number) => {await toggleSelected(id);}} onSubmit={async (id: number[]) => {await toggleRented(id);}}></RentalForm>
                <RentalHistory history={history}></RentalHistory>
            </SignedIn>
            </section>
            </>    
        )
    }