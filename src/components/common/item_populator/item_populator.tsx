import "./item_populator.css";
import type {Inventory} from "../../../data/itemsList";

function box_items(
    {
        itemsList,
        sortingtype,
        listVal
    }:
    {
        itemsList: Inventory[],
        sortingtype?: string | boolean | number,
        listVal?: keyof Inventory
    }
){


function sort(){
    if (sortingtype != undefined && listVal != undefined) {
        const filteredList: Inventory[] = itemsList.filter((item) => item[listVal] == sortingtype);

        return filteredList;
    }
    else {
        return itemsList;
    }}

const List: Inventory[] = sort();

    return (
        <>
        <section className="ItemPopulator">
            <div className="ParentList"> 
                {List.map((item) => 
                <div className="ChildItem" key={item.sku}>
                    <img className="ChildIMG" src={item?.Image.src} alt={item.Image.alt ?? item.name} />
                    <p className="ChildContent"> {item.name}</p>
                    <p className="ChildContent"> ${item.price}</p>
                    <p className="ChildContent"> {item.description}</p> 
                </div>)}
            </div>
        </section>
        </>
    )
}


export default box_items;