import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { base } from "@/app/mainApi";
import { removeCart, setCart } from "./CartSlice";
import CheckOut from "./CheckOut";

export default function CartPage() {
  const { cart } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleIncrement = (item) => {
    if (item.qty < item.stock) {
      dispatch(
        setCart({
          ...item,
          qty: item.qty + 1,
        })
      );
    }
  };

  const handleDecrement = (item) => {
    if (item.qty > 1) {
      dispatch(
        setCart({
          ...item,
          qty: item.qty - 1,
        })
      );
    }
  };

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
        <div className="bg-gray-100 p-6 rounded-full mb-4 animate-pulse">
          <ShoppingCart className="w-10 h-10 text-gray-400" />
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mb-6 max-w-md">
          Looks like you haven&apos;t added anything yet. Start shopping to fill
          your cart.
        </p>

        <Button
          onClick={() => navigate("/")}
          className="px-6 py-2 text-base"
        >
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-md transition"
            >
              <CardContent className="flex gap-4 items-center p-4">
                {/* Product Image */}
                <img
                  src={`${base}/${item.image}`}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md border"
                />

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-muted-foreground">
                    Rs {item.price}
                  </p>

                  <p className="text-sm text-gray-500">
                    Stock: {item.stock}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-3">
                    <Button
                      size="icon"
                      variant="outline"
                      disabled={item.qty === 1}
                      onClick={() => handleDecrement(item)}
                    >
                      <Minus size={16} />
                    </Button>

                    <span className="px-3 font-medium">
                      {item.qty}
                    </span>

                    <Button
                      size="icon"
                      variant="outline"
                      disabled={item.qty === item.stock}
                      onClick={() => handleIncrement(item)}
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>

                {/* Remove Item */}
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => dispatch(removeCart(item.id))}
                >
                  <Trash2 size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <Card className="h-fit shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>Rs {total}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className="text-green-600">
                Free
              </span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>

            <CheckOut
              cart={cart}
              total={total}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}