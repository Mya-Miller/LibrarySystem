import './checkout.css';

function checkout() {

    return (
        <section className="container content-section">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
                <span className="cart-item cart-header cart-column">ITEM</span>
            </div>
            <button className="btn btn-primary btn-purchase" type="button">
            CHECKOUT
            </button>
        </section>
    );
}

export default checkout;