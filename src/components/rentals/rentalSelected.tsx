import type { Rental } from "../../data/rentals";
import "./rental.css"

export function RentalSelected({
    r,
    onClick
}:
{
  r: Rental[],
  onClick: (id: number) => void
}) { 

  return (
    <div className="ChildContainer">
      {r.length === 0 ? (
        <div>No rentals selected</div>
      ) : (
        r.map((selectedRental) => (
          <div className="ChildItem" key={selectedRental.sku}>
            <img
              className="ChildImage"
              src={selectedRental.Image.src}
              alt={selectedRental.Image.alt ?? selectedRental.name}
            />
            <p className="ChildContent">{selectedRental.name}</p>
            <p className="ChildContent">{selectedRental.productType}</p>
            <button
              className="ChildButton"
              type="button"
              onClick={() => onClick(selectedRental.sku)}
            >
              REMOVE
            </button>
          </div>
        ))
      )}
    </div>
  );
}