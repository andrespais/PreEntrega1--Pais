import CartWidget from "./CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Compras</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar;