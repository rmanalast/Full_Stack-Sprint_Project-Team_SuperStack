import { useEffect, useState } from "react";
import * as services from "../services/rentalServices";
import type { Rental } from "../data/rentals";

export function useRental() {

    const [rentals, updateRentals] = useState<Rental[]>();
    const [error, updateError] = useState<string>();

    const getTerms = async() => {
        try {
            const r = await services.getRentals()

            updateRentals([...r])
        } catch(e) {
            updateError(`${e}`)
        }};

    const toggle = async(sku: number, type: number) => {
        try {
            if (type === 1) {
            services.changeSelected(sku);} 
            else {
            services.changeStatus(sku);
            }
        }
        catch(e) {
            updateError(`${e}`)
        }
    };


    useEffect(() =>{
        getTerms()}, [rentals]);

    
    return {
        toggle,
        rentals,
        error
    }};