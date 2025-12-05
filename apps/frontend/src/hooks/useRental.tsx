import { useEffect, useState } from "react";
import * as services from "../services/rentalServices";
import type { Rental } from "../data/rentals";
import { useUser, useAuth } from "@clerk/clerk-react";

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
    const { getToken } = useAuth()

    const [rentals, updateRentals] = useState<Rental[]>([]);
    const [error, setError] = useState<string | null>();
    const [history, setHistory] = useState<Rental[]>([])



    const { isSignedIn } = useUser();
      const fetchRentals = async () => {

      try {
        const data = await services.getRentals();
        updateRentals([...data]);
        }
      catch(e) {
        setError(`${e}`)
      }
      };
      
    const toggleSelected = (sku: number) => {
      const f = rentals.find(r => r.sku === sku);

        if (!f) {
          throw Error(`Item with ID ${sku} not found`)
        }
          updateRentals(rentals.map(item => 
          item.sku === sku ? {...item, isSelected: !item.isSelected} : item))
      };

    const toggleRented = async (sku: number[]) => {
      const t = await getToken()

      if (!t) {
        throw new Error("Bad Token")
      }
      await services.updateRentals(sku, t);

      updateRentals(rentals.map(item => 
        sku.includes(item.sku) ? {...item, isRented: !item.isRented} : item))

      const filtered: Rental[] = rentals.filter(r => sku.includes(r.sku));

      setHistory([...filtered])
    };

    useEffect(() => {
      fetchRentals();
      }, []);


    useEffect(() => {
      const getHistory = async () => {
        if (!isSignedIn) {
          setHistory([])
          return;
        }

      try {
        const t = await getToken()
        if (!t) {
          throw new Error("Bad Token")
        }
        const h: number[] = await services.history(t)
        console.log(h)
        const historySkus = new Set(h);
        const filtered = rentals.filter(r => historySkus.has(r.sku));
        setHistory(filtered)
      } catch(e) {
        console.log("Get wrecked")
        throw new Error(`${e}`)
      }
    };

    getHistory()
    },[isSignedIn] )

    return {
        rentals,
        error,
        toggleRented,
        toggleSelected,
        history
        }};