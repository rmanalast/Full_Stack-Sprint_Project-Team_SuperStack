/* formEdit.tsx. Update card information */

import { useState } from "react";
import { updateForm } from "../../../repository/formRepo"

type Form = {
  id: number;
  name: string;
  email: string;
  card: string;
  expiry: string;
  cve: string;
};

export function FormEdit({form}: {form:Form}){

    const[edited,setEdited] = useState<Form>(form);
    async function handleUpdate(){
        try{
            const updated = await updateForm(edited, null);
            console.log("Updated form:", updated);
            alert("Form updated successfully");
        } catch (err) {
            console.error("Error updating form:", err);
        }
    }

    return (
        <section>
            <h2> Edit Form</h2>
            <div>
                <label>Name:</label>
                <input 
                    value={edited.name}
                    onChange={e => setEdited({...edited, name: e.target.value})}
                />
            </div>
            <div>
                <label>Email:</label>
                <input 
                    value={edited.email}
                    onChange={e => setEdited({...edited,email: e.target.value})}
                />
            </div>
            
            
            <div>
                <label>Card:</label>
                <input 
                    value={edited.card}
                    onChange={e => setEdited({...edited, card: e.target.value})}
                />
            </div>

            <div>
                <label>Expiry:</label>
                <input 
                    value={edited.expiry}
                    onChange={e => setEdited({...edited, expiry: e.target.value})}
                />
            </div>
            <div>
                <label>CVE:</label>
                <input 
                    value={edited.cve}
                    onChange={e => setEdited({...edited, cve: e.target.value})}
                />
            </div>
            <button onClick={handleUpdate}>Save Changes</button>

        </section>
    
    );

}
