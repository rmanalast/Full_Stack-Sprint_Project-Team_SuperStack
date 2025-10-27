/*
emptyCartCache.ts
This hook will empty our "cart" on local storage. 
To see visisble results, refresh page and your cart list is empty.

*/

export function useClearCart() {

    function clearCart(){
        localStorage.removeItem("cart");
        console.log("Cart cleared from localStorage.");

    }

    return clearCart;
}


