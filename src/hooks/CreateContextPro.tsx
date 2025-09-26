import { useReducer, type ReactNode, useEffect } from "react";
import { MyContext } from "../context/MyContext";

function reducer(state: any, action: any) {
    switch (action.type) {
        case "ADD_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

        case "REMOVE_CART":
            return { ...state, cart: state.cart.filter((item: any) => item.id !== action.payload.id) };

        case "CLEAR_CART":
            return { ...state, cart: [] };

        default:
            return state;
    }
}

function CreateContextPro({ children }: { children: ReactNode }) {
    const initialState = {
        cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);
    
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
}

export default CreateContextPro;