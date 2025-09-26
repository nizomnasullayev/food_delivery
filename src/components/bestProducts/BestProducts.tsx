import iceCream from '../../assets/Image (9).png'


function BestProducts() {
    return (
        <section className="best-products">
            <h2 style={{ textAlign: "center" }}>--Best Selling Product--</h2>
            <ul>
                <li><a href="#">Fruits</a></li>
                <li><a href="#">Vegetable</a></li>
                <li><a href="#">Meal</a></li>
                <li><a href="#">Milk</a></li>
                <li><a href="#">Cakes</a></li>
                <li><a href="#">Drinks</a></li>
            </ul>
            <div className="wrapper">
                {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className='b-product-card'>
                        <img src={iceCream} alt="" />
                        <div className="product-info">
                            <p>ICE cream cones sundae...</p>
                            <span>$30.00</span>
                        </div>
                        <div className="actions">
                            <button>+</button>
                            <button>❤</button>
                            <button>👁</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BestProducts