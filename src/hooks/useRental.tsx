/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import * as services from "../services/rentalServices";
import type { Rental } from "../data/rentals";
import { createContext } from "react";

type RentalsContextType = {
  rentals: Rental[];
  updateRentals: Dispatch<SetStateAction<Rental[]>>;
  toggle: (sku: number) => void;
};

export const RentalsContext = createContext<RentalsContextType | null>(null);export 

const RentalProvider = ({ children }: { children: ReactNode }) => {

    const [rentals, updateRentals] = useState<Rental[]>([]);

    useEffect(() => {
        const fetchRentals = async () => {
        const data = await services.getRentals();
    updateRentals(data);
  };

  fetchRentals();
}, []);

    const toggle = (sku: number) => {
        updateRentals((prevRentals) => {
        return prevRentals.map((rental) =>
            rental.sku === sku ? { ...rental, isSelected: !rental.isSelected } : rental
        )
    })};

  return (
    <RentalsContext value={{ rentals, updateRentals, toggle }}>
      {children}
    </RentalsContext>
  );
};

export function useRental() {

    const context = useContext(RentalsContext);

    if (!context) {
    throw new Error("useRental must be used within a RentalProvider");}


    const { rentals, updateRentals, toggle } = context;

    return {
        rentals,
        toggle,
        updateRentals
        }};