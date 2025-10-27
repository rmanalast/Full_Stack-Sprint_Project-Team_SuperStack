import { useEffect, useState } from "react";
import * as services from "../services/rentalServices";
import type { Rental } from "../data/rentals";

/**
 * Custom hook for rental page logic and handling.
 *
 * @param {object} - none: it is more so an initializer hook
 * @returns {object} - Contains:
 *   - rentals: current rentals objects
 *   - errors: returns error if one is given, not set up at the moment, will be next sprint. 
 *   - toggleRented: handler to get given to the rental form, used to toggle isRented
 *   - toggleSelected: handler to get given to the rental populator buttons to be used to toggle isSelected
 */


export function useRental() {

    const [rentals, updateRentals] = useState<Rental[]>([]);
    const [error, setError] = useState<string | null>();


        const fetchRentals = async () => {

      try {
        const data = await services.getRentals();
        updateRentals([...data]);
        }
      catch(e) {
        setError(`${e}`)
      }
      };

    const toggleRented = async(sku: number) => {
      try {
        await services.toggleIsRented(sku);

        await fetchRentals()

      }
      catch(e){
        setError(`${e}`)
      }
    };

    const toggleSelected = async(sku: number) => {
      try {
        await services.toggleIsSelected(sku);

        await fetchRentals()
      }
      catch(e){
        setError(`${e}`)
      }
    };


    useEffect(() => {
      fetchRentals();
      }, []);

    return {
        rentals,
        error,
        toggleRented,
        toggleSelected
        }};