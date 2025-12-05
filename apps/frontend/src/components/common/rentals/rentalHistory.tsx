import type { Rental } from "../../../data/rentals";
import { SignedIn } from '@clerk/clerk-react';
import "./rental.css";

export function RentalHistory ({
    history
    }
    :
    {
    history: Rental[]
    }) {

    return (
    <>
    <SignedIn>
        <h3>Rental History</h3>
        <div className="ChildContainer">
        {history.length < 1 ? (
            <h3>rental history empty</h3>
        ) : (
        history.map((selectedRental) => (
            <div className="ChildItem" key={selectedRental.sku}>
            <img
                className="ChildImage"
                src={selectedRental.image}
                alt={selectedRental.name}
            />
            <p className="ChildContent">{selectedRental.name}</p>
            <p className="ChildContent">{selectedRental.productType}</p>
            </div>
        )))}
        </div>
    </SignedIn>
        </>
        );
    }