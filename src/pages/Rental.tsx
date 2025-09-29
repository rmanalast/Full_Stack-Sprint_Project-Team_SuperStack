import{ type Inventory } from "../data/itemsList";
import {RentalForm} from "../components/rentals/rentalForm"
import {RentalPopulator} from "../components/rentals/rentalPopulator"

// Rentals page to populate available rentals and add them to cart. anything with rentalCart true
export function Rentals(
   {
    RentalList,
    setRental
}:
{
    RentalList: Inventory[],
    setRental: React.Dispatch<React.SetStateAction<Inventory[]>>
}
) {

    return (
    <>
    <section>
    <RentalPopulator rentalInventory={RentalList} updateSelected={setRental}
    /> 
    </section>
    <RentalForm rentalInventory={RentalList} updateSelected={setRental} ></RentalForm>
    </>
    )
    }