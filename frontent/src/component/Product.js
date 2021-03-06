import './Product.css';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <>
            <div className="product">
                <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">PlayStation 5</p>
                    <p className="info__description">
                        PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020
                        in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India
                    </p>
                    <p className="info__price">$499.99</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>
            <div className="product">
                <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">Iphone 12</p>
                    <p className="info__description">
                    Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.
                    </p>
                    <p className="info__price">$1099</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>
            <div className="product">
                <img src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">Cannon EOS-1D</p>
                    <p className="info__description">
                    The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual ???DIGIC 5+??? processors sets the standard, and up to 12 frames per second shooting takes it beyond.
                    </p>
                    <p className="info__price">$1300</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>
            <div className="product">
                <img src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">Amazon Alexa</p>
                    <p className="info__description">
                    It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.
                    </p>
                    <p className="info__price">$50</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>            
            <div className="product">
                <img src="https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">Audio Technica Headphones</p>
                    <p className="info__description">
                    Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.
                    </p>
                    <p className="info__price">$233</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>            
            <div className="product">
                <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">JBL FLIP 4</p>
                    <p className="info__description">
                    JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.
                    </p>
                    <p className="info__price">$140</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>
            <div className="product">
                <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">JBL FLIP 4</p>
                    <p className="info__description">
                    JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.
                    </p>
                    <p className="info__price">$140</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>
            <div className="product">
                <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                    alt="product name" /><br />

                <div className="product__info">
                    <p className="product__name">JBL FLIP 4</p>
                    <p className="info__description">
                    JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.
                    </p>
                    <p className="info__price">$140</p>
                    <Link to={`/product/${1111}`} className="info__button">View</Link>
                </div>
            </div>
        </>
    )
}

export default Product;