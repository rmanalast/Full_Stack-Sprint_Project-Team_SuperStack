import type { Inventory } from "../../data/itemsList";
import "./rental.css"

export function RentalSelected(
    {
        selectedRental,
        onClick,
    }:
    {
        selectedRental: Inventory,
        onClick: () => void,
    }
) { 
    return (
            <div className="ChildContainer">
                <div className="ChildItem">
                    <img className="ChildImage"src={selectedRental.Image.src} alt={selectedRental.Image.alt ?? selectedRental.name}/> 
                    <p className="ChildContent">{selectedRental.name}</p>
                    <p className="ChildContent">{selectedRental.productType}</p>
                    <button className="ChildButton" onClick={onClick}>REMOVE</button>
                </div>
            </div>)}