import 'checkout.css';

function checkout() {

    return (
        <section class="container content-section">
            <h2 class="section-header">CART</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
            </div>
            <button class="btn btn-primary btn-purchase" type="button">
            CHECKOUT
            </button>
        </section>
    );
}

export default checkout;