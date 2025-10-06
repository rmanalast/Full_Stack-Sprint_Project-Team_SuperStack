// CarForm.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';
import './cartStyles.css';
import { AddCart } from './addDropCart';
import './formStyles.css'
import type { Inventory } from '../../data/itemsList';


// Define a TypeScript type for the contact form data
type Contact = {
    name:string;
    email:string;
    card:string
    expiry:string;
    cve:string;
};

type ContactFormProps = {
  cartItems: Inventory[];
  setCartItems: React.Dispatch<React.SetStateAction<Inventory[]>>;
};
// Define the ContactForm component
export function ContactForm({ cartItems, setCartItems }: ContactFormProps){

    const [contact, setContact] = useState<Contact>({
        name:"",
        email:"",
        card:"",
        expiry:"",
        cve:"",

    })

    const [isPaid, setIsPaid] = useState(false);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPaid(true);
    console.log('Payment complete:', contact);
    console.log('Submitted details:', contact);
}
    
    return(
        <section className = "cart__form">
            <h2> Complete Form </h2>
            <p>ADD/Drop form cart</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor ="name"> Your Name</label>
                    <input type="text" id = "name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} required minLength={3} />
                </div>
                <div>
                    <label htmlFor ="email"> Email</label>
                    <input type="text" id = "email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} required />
                </div>
                <div>
                    <label htmlFor ="card">Card Info </label>
                    <input type="text" id = "card" value={contact.card} onChange={(e) => setContact({ ...contact, card: e.target.value })} required minLength={10}/>
                </div>
                <div>
                    <label htmlFor ="expiry">Expiry Date </label>
                    <input type="text" id = "expiry" value={contact.expiry} onChange={(e) => setContact({ ...contact, expiry: e.target.value })} required minLength={4} />
                </div>
                <div>
                    <label htmlFor ="cve">CVE </label>
                    <input type="text" id = "cve" value={contact.cve} onChange={(e) => setContact({ ...contact, cve: e.target.value })} required minLength={3}/>
                </div>
                <div>
                    <button type = "submit">
                        Submit
                    </button>
                </div>
            </form>  
            <div>
                Status: {isPaid ? <strong>Payment Complete</strong> : <em>Not Paid For</em>}
            </div>

            <AddCart cartItems={cartItems} setCartItems={setCartItems} />
                    
        </section>

    );

}

