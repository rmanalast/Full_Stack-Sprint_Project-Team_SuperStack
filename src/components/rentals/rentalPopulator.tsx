import type { Rental } from "../../data/rentals";

import "./rental.css"

export function RentalPopulator ({
    r,
    onClick,
    message
    }
    :
    {
    r: Rental[],
    onClick: (sku: number) => void,
    message: string
    }) {

    const fr: Rental[] = r.filter((item) => item.isRented == false);

  return (
    <div className="ChildContainer">
      {fr.length === 0 ? (
        <div>{message}</div>
      ) : (
        fr.map((selectedRental) => (
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
              {selectedRental.isSelected === true ? 'REMOVE' : 'ADD'}
            </button>
          </div>
        ))
      )}
    </div>
  );
}