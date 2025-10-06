import "./item_populator.css";
import type {Inventory} from "../../../data/itemsList";

function box_items(
    {
        itemsList,
        itemUpdater, // pass the state setter from WishlistPage
        sortingtype,
        listVal,
        allowRemove = false,
    }:
    {
        itemsList: Inventory[],
        itemUpdater: React.Dispatch<React.SetStateAction<Inventory[]>>, // type for state setter function
        sortingtype?: string | boolean | number,
        listVal?: keyof Inventory,
        allowRemove?: boolean
    }
){


    function sort(){
        if (sortingtype != undefined && listVal != undefined) {
            const filteredList: Inventory[] = itemsList.filter((item) => item[listVal] == sortingtype);

            return filteredList;
        }
        else {
            return itemsList;
        }
    }

        const List: Inventory[] = sort();

        const handleToggleWishlist = (clickedItem: Inventory) => {
            itemUpdater(prev =>
            prev.map(item =>
                item.sku === clickedItem.sku
                ? { ...item, isWishListed: !item.isWishListed } // toggle true/false
                : item
            )
        );
    };

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
                    <button
                    className="wishlist-button"
                    onClick={() => handleToggleWishlist(item)}
                    >
                    {allowRemove
                        ? (item.isWishListed ? "Remove from Wishlist" : "Add to Wishlist")
                        : "Add to Wishlist"}
                    </button>
                </div>)}
            </div>
        </section>
        </>
    )
}


export default box_items;