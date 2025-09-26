import googleplay from '../../assets/googleplay.png'
import appstore from '../../assets/appstore.png'
import appscreen from '../../assets/app scrren.png'


function OnlineShop() {
    return (
        <section className="online-shop">
            <div className="wrapper">
                <div className="online-shop-text">
                    <h1>Make your online shop sob ready with our mobile all</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    <div>
                        <button style={{ border: "none", background: "none", marginRight: "20px" }}><img src={googleplay} alt="" /></button>
                        <button style={{ border: "none", background: "none" }}><img src={appstore} alt="" /></button>
                    </div>
                </div>
                <div className="online-shop-img">
                    <img src={appscreen} alt="" />
                </div>
            </div>
        </section>
    )
}

export default OnlineShop