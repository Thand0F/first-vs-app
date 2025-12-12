"use client";
import { useCart } from "../../context/cartcontext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    email: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Add quantity = 1 if missing
  const cartWithQuantity = cart.map((item) => ({
    ...item,
    quantity: item.quantity || 1,
  }));

  // Calculate total price
  const totalPrice = cartWithQuantity.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.email) {
      alert("Please fill in all shipping info fields.");
      return;
    }

    // Here you can call your backend API to process the order
    console.log("Order details:", { cart: cartWithQuantity, shippingInfo, totalPrice });

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {cartWithQuantity.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="mb-6">
          {cartWithQuantity.map((item) => (
            <li key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="text-lg font-bold mb-6">Total: ${totalPrice.toFixed(2)}</p>

      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePlaceOrder();
        }}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={shippingInfo.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={shippingInfo.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={shippingInfo.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
