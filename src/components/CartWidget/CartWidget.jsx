import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img className='CartWidget' src={cart} alt="cart-widget" />
            0
        </div>
    );
}

export default CartWidget;
