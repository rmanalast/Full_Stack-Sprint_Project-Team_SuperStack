import "./rentalForm.css"
import { type Rental } from "../../data/rentals";
import { RentalPopulator } from "./rentalPopulator";


export function RentalForm({
    r,
    onClick, //toggle isSelected
    onSubmit //toggle isRented
}
:
{
    r: Rental[],
    onClick: (sku: number) => void
    onSubmit: (sku: number) => void
}) {

    const selected: Rental[] = r.filter((s) => s.isSelected == true && s.isRented == false)

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted");

        r.map((s) => {
            const i = selected.find(sel => sel.sku === s.sku);
                if (i) {
                onSubmit(i.sku)
                };
                }
            )
        };

    return (
        <section className="rentals-page">
            <form onSubmit={handleSubmit}>
                <h2>Rental Sign Out Form</h2>
                <div>
                    <RentalPopulator message={"No Rentals Selected"}r={selected}onClick={
                    async (id: number) => {
                                await onClick(id);}}></RentalPopulator>
                    </div>
                    <label htmlFor="selector">Select Length of Time</label>
                    <select className="periodRental" id="selector">
                        <option value="" hidden> -- Select an option -- </option>
                        <option>7 days</option>
                        <option>14 days</option>
                        <option>30 days</option>
                    </select>
                    {/* {selectError && (
                        <div id="select-error" style={{ color: "crimson", marginTop: 4 }}>
                            {selectError}
                        </div>
                    )} */}

                    <label htmlFor="name">Enter your name</label>
                    <input className="rentalInput"type="text" id="name"required={true}></input>
                    {/* {nameError && (
                        <div id="name-error" style={{ color: "crimson", marginTop: 4 }}>
                            {nameError}
                        </div>
                    )} */}
                    

                    <label htmlFor="email">Enter your email</label>
                    <input className="rentalInput"type="email" id="email"required={true}></input>
                    {/* {emailError && (
                        <div id="name-error" style={{ color: "crimson", marginTop: 4 }}>
                            {emailError}
                        </div>
                    )} */}

                    <button className="rentalButton"type="submit" onSubmit={handleSubmit}>submit</button>
            </form>
        </section>
    )
};