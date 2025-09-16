import { useContext } from "react";
import { MyContext } from "./MyContextApi";


export function useContextApi() {
    if (!MyContext) {
        throw new Error("useContextApi must be used within a MyContext.Provider");
    }
    return useContext(MyContext);
}



