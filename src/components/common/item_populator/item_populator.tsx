import InventoryList from "./itemsList";
import "./item_populator.css";

export function box_items(){
    const List = InventoryList

    return (
        <>
        <section className="ItemPopulator">
            <header> Weekly Deals </header>
            <div className="ParentList"> 
                {List.map((item) => 
                <span className="item" key={item.sku}>
                    <img className="ListIMG" src={item?.image} height={100} 
                    width={100} />
                    <a className="List"> {item.name}</a>
                    <a className="List"> ${item.price}</a>
                    <a className="List"> {item.description}</a> 
                </span>)}
            </div>
        </section>
        </>
    )
}


export default box_items;