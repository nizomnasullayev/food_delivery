import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import type { Product } from '../../types/types'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import useCategory from '../../hooks/useCategory';
import useContextPro from '../../hooks/useContextPro';

function BestSelling() {
    const { state, dispatch } = useContextPro();

    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSetelectedCategory] = useState("");

    const queryIf =
        selectedCategory === ""
            ? orderBy("created_at", "desc")
            : where("categoryId", "==", selectedCategory);

    const q = query(collection(db, "food_delivery"), queryIf);

    const { categories } = useCategory();

    useEffect(() => {
        const unSub = onSnapshot(q, (snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Product, "id">),
                }))
            );
        });
        return () => unSub();
    }, [selectedCategory]);

    return (
        <section className="best-selling">
            <h2 style={{ textAlign: "center" }}>--Best Selling--</h2>
            <ul>
                {categories.map((categ) => (
                    <li key={categ.id}>
                        <button
                            onClick={() => setSetelectedCategory(categ.id)}
                            className="filter-button"
                        >
                            {categ.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="wrapper">
                {products.map((p) => {
                    const isInCart = state.cart.some((item: Product) => item.id === p.id);
                    return (
                        <div key={p.id} className="small-cards">
                            <img className="small-card-img" src={p.imgUrl} alt={p.title} />
                            <div className="small-cards-text">
                                <p>{p.title}</p>
                                <p>
                                    <span className="line-through">${p.oldPrice}</span>
                                    <span className="exact-price">${p.price}</span>
                                </p>
                                <button
                                    onClick={() => {
                                        if (isInCart) {
                                            dispatch({ type: "REMOVE_CART", payload: p });
                                        } else {
                                            dispatch({ type: "ADD_CART", payload: p });
                                        }
                                    }}
                                    className="main-button"
                                >
                                    {isInCart ? "Remove" : "Buy Now"}
                                </button>

                                <Stack spacing={1}>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={p.rating}
                                        precision={0.5}
                                        readOnly
                                    />
                                </Stack>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default BestSelling;