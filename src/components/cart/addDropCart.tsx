import type { Inventory } from '../../data/itemsList';

type CartPageProps = {
  cartItems: Inventory[];
  setCartItems: React.Dispatch<React.SetStateAction<Inventory[]>>;
};

export function AddCart({ cartItems, setCartItems }: CartPageProps) {
  function removeFromCart(sku: number) {
    // Remove item from cart by filtering out the item with matching sku
    setCartItems(cartItems.filter(item => item.sku !== sku));
  }

  return (
    <>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Description</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.sku}>
                <td>
                  {item.Image && (
                    <img
                      src={item.Image.src}
                      alt={item.Image.alt || item.name}
                      width={40}
                      height={40}
                    />
                  )}
                  {item.name}
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => removeFromCart(item.sku)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
