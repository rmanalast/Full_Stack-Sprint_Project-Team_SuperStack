import type { Rental } from "../../data/rentals";


export function RentalPopulator (
    {
        rentalInventory,
        updateSelected
    }:
    {
        rentalInventory: Rental[],
        updateSelected: React.Dispatch<React.SetStateAction<Inventory[]>>,
    }
) {
    const filteredList: Rental[] = rentalInventory.filter((item) => item.isRented == false);

    const handleButtonClick = (rentalClicked: Rental): void => {
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

    return (
        <>
        <section className="rentalPopulator">
            <h2> Available Rentals</h2>
            <div className="ParentList"> 
                {filteredList.map((rental) => 
                <div className="ChildItem" key={rental.sku}>
                    <img className="ChildIMG" src={rental?.Image.src} alt={rental.Image.alt ?? rental.name} />
                    <p className="ChildContent"> {rental.name}</p>
                    <p className="ChildContent"> {rental.productType}</p> 
                    <button onClick={() => {handleButtonClick(rental)}} >
                        {rental.isSelected ? 'REMOVE' : 'ADD'}
                    </button>
                </div>)}
            </div>
        </section>
        </>
    )
}