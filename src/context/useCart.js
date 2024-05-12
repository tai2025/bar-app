import { useUIContext } from ".";

class Product {
    constructor(drink, quantity) {
        this.drink = drink;
        this.quantity = quantity;
    }
}

function useCart() {
    const {cart, setCart } = useUIContext();

    const updateQuantity = (cur, n, quantity) => {
        if(cur.drink.id === n.drink.id){
            return new Product(cur.drink, cur.quantity + quantity);
        } else{
            return cur;
        }
    }

    const addToCart = (drink) => {
        // Create a new product instance
        let newProduct = new Product(drink, 1);

        // Check if the product is already in the cart
        let productIndex = cart.findIndex(c => c.drink.id === drink.id);

        // Update cart by checking if the product exists
        let updatedCart = productIndex >= 0
            ? cart.map((item, index) => {
                if (index === productIndex) {
                    // Assuming updateQuantity merges quantities and returns a new product
                    return updateQuantity(item, newProduct, newProduct.quantity);
                }
                return item;
            })
            : [...cart, newProduct]; // If not found, add the new product to the cart

        // Update state and local storage
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    const removeFromCart = (remove) => {
        let x = cart.filter(c => c.drink.id !== remove.drink.id)
        setCart(x);
        localStorage.setItem("cart", JSON.stringify(x))
    }


    return {addToCart, removeFromCart}
}

export default useCart;