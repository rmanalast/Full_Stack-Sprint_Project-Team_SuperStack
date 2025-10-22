import type { Rental } from "../../data/rentals";
import { useRental } from "../../hooks/useRental";
import "./rental.css"

export function RentalSelected() { 

    const {
        rentals,
        toggle
    } = useRental()

    const selected = rentals.filter((s) => s.isSelected === true && s.isRented === false)
  return (
    <div className="ChildContainer">
      {selected.length === 0 ? (
        <div>No rentals selected</div>
      ) : (
        selected.map((selectedRental) => (
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
              onClick={() => toggle(selectedRental.sku)}
            >
              REMOVE
            </button>
          </div>
        ))
      )}
    </div>
  );
}