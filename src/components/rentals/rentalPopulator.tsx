import type { Rental } from "../../data/rentals";

export function RentalPopulator ({
    r,
    onClick
    }
    :
    {
    r: Rental[],
    onClick: (sku: number) => void
    }) {

    const filteredList: Rental[] = r.filter((item) => item.isRented == false);

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
                    <button type="button" onClick={() => {onClick(rental.sku)}} >
                        {rental.isSelected === true ? 'REMOVE' : 'ADD'}
                    </button>
                </div>)}
            </div>
        </section>
        </>
    )
}