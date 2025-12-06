/*formList.tsx. Get all card information*/

import { useEffect, useState } from "react";
import { fetchForms } from "../../../repository/formRepo";
import { FormEdit } from "./formEdit";
import type { Form } from "@shared/types/formType";
import { useAuth } from "@clerk/clerk-react";

export function FormList(){
    const [forms,setForms] = useState<Form[]>([]);
    const { getToken } = useAuth()

    useEffect(() => {
        async function loadForms(){
            try {
                const t = await getToken()

                if (!t) throw new Error("Token Error");
                const data = await fetchForms(t);
                setForms(data);
            }   catch (err) {
                console.error("Error fetching forms:", err);
            }
        }
        loadForms();
    },[]); 

    return (
        <section>
            <h2>All Forms</h2>
            <ul>
                {forms.map(f => (
                    <li key = {f.id}>
                        <br/>
                        <strong>Name:</strong> {f.name} | 
                        <br/>
                        <strong>Email:</strong> {f.email} | 
                        <br/>
                        <strong>Card:</strong> {f.card} | 
                        <br/>
                        <strong>Expiry:</strong> {f.expiry} | 
                        <br/>
                        <strong>CVE:</strong> {f.cve}
                        <br/>
                        <FormEdit form={f} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
