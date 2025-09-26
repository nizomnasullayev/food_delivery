import service from "../../assets/Image (8).png"
import delivery from "../../assets/Free Delivery.png"

function SpecialService() {
    return (
        <section className="special-service">
            <div className="wrapper">
                <div className="s-img-side">
                    <img className="f-delivery" src={delivery} alt="" />
                    <img src={service} alt="" />
                </div>
                <div className="s-text-side">
                    <h1>Our Spiceal Service Fresh Beef</h1>
                    <p><span style={{textDecoration: 'line-through'}}>$20.00</span>$18.00</p>
                    <button className="main-button">SHOP NOW</button>
                </div>
            </div>
        </section>
    )
}

export default SpecialService