import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import type { Category } from "../types/types";


function useCategory() {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        const unSub = onSnapshot(collection(db, "categories"), (snapshot) => {
            setCategories(
                snapshot.docs.map(
                    (doc) => ({ id: doc.id, ...(doc.data() as Omit<Category, "id">) })
                )
            );
        });
        return () => unSub();
    }, [])

    return { categories }
}

export default useCategory