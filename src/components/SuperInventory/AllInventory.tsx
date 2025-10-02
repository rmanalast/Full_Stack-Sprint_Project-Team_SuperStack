/*
AllInventory.tsx
For NXT LVL movies.
Renders all Inventory related lists. 
Title and list data are passed to as props, then render on landing page.
*/ 

type Item = {
  title: string;
  year: number;
  description: string;
};

type Props = {
  label: string;
  items: Item[];
};
export function DisplayInventory({ label, items }: Props){
    if (!Array.isArray(items) || items.length === 0) {
        return <p>No inventory available.</p>;
    }

    return(    
        <section className="inventory">
            <h4>{label}</h4>
            <ul className="inventory__list">
                {items.map(({title, year, description},index) => (
                <li key={title}>
                    <strong>{title},({year})</strong>
                    <p>{description}</p>
                </li>
                ))}
            </ul>
        </section>
        
    );

}