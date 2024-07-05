import { useContext } from "react"
import CartContext from "../contex/CartContext"
import { useToast } from "../contex/ToastifyContext";



const useToasty = () => {
    const { agregarProducto, carrito, setCarrito } = useContext(CartContext);
    const {showToast} = useToast();

    const handleAgregarProducto = (producto, cantidad) => {
        agregarProducto(producto, cantidad);
        showToast({ text: "Producto agregado al carrito!" });
    };

    const handleEliminarProducto = (productoId) => {
        setCarrito(carrito.filter(p => p.id !== productoId));
        showToast({ text: `Producto eliminado del carrito` });
      };

    return {handleAgregarProducto, handleEliminarProducto};
};

export default useToasty;