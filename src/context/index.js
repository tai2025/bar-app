import { createContext, useContext, useState } from "react";

export const UIcontext = createContext();
export const useUIContext = () => useContext(UIcontext);

export const UIProvider = ({children}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const value = {
        drawerOpen,
        setDrawerOpen,
        cart,
        setCart,
        showCart,
        setShowCart
    }
    return <UIcontext.Provider value={value}>{children}</UIcontext.Provider>
}