import { useEffect, useState } from "react";
import * as services from "../services/rentalServices";
import type { Rental } from "../data/rentals";

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