/*formList.tsx. Get all card information*/

import { useEffect, useState } from "react";
import { fetchForms } from "../../../repository/formRepo";
import { FormEdit } from "./formEdit";

type Form = {
  id: number;
  name: string;
  email: string;
  card: string;
  expiry: string;
  cve: string;
};

export function FormList(){
    const [forms,setForms] = useState<Form[]>([]);

    useEffect(() => {
        async function loadForms(){
            try {
                const data = await fetchForms(null);
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
                        <strong>Name:</strong> {f.name} | 
                        <strong>Email:</strong> {f.email} | 
                        <strong>Card:</strong> {f.card} | 
                        <strong>Expiry:</strong> {f.expiry} | 
                        <strong>CVE:</strong> {f.cve}
                        <FormEdit form={f} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
