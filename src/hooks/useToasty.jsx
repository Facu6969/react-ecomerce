import { useContext } from "react"
import CartContext from "../contex/CartContext"
import { useToast } from "../contex/ToastifyContext";



const useToasty = () => {
    const { agregarProducto } = useContext(CartContext);
    const {showToast} = useToast();

    const handleAgregarProducto = (producto, cantidad) => {
        agregarProducto(producto, cantidad);
        showToast({ text: "Producto agregado al carrito!" });
    };

    return {handleAgregarProducto};
};

export default useToasty;