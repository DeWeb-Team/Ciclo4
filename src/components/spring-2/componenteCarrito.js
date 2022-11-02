import "../../styles/estiloCarrito.css";
import data from "../../util/data.json";

function ValorTabla(prop) {
    return (
        <tr
            style={{ animation: `aparecer ${prop.con}s 1 forwards` }}
            className="tr-carrito tr-efectos"
        >
            <td className="td-carrito"> <img src={prop.imagen} alt={prop.nombreProducto}/></td>
            <td className="td-carrito">{prop.cantidad}</td>
            <td className="td-carrito"> {prop.nombreProducto}</td>
            <td className="td-carrito"> $ {prop.valor.toLocaleString('es-CO')}</td>
            <td className="td-carrito"> $ {prop.total.toLocaleString('es-CO')}</td>

        </tr>
    );
}

function OpcionesCarrito() {

    const finalizarCompra = () => alert('Compra finalizada')
    const cancelarCompra = () => alert('Cancelar compra')

        return (
        <div id="contenedor-botones">
            <button onClick={finalizarCompra} className="botones-opciones">
                Finalizar compra
            </button>
            <button onClick={cancelarCompra} className="botones-opciones">
                Cancelar compra
            </button>
        </div>
    );
}

function TablaCarrito() {
    let contador = 0.3;
    let totalCompra = 0;

    const LLamarDatos = data.map((dato, index) => (
        <ValorTabla
            imagen={dato.url_img}
            cantidad={dato.cantidad}
            nombreProducto={dato.producto}
            valor={dato.valor}
            total={dato.cantidad * dato.valor}
            con={(contador = contador + 0.1)}
            key={index}
            totalCompra={totalCompra += (dato.cantidad * dato.valor)}
        />
    ));

    return (
        <div>
            <h1 className="titulo-tabla">Carrito</h1>
            <table id="tabla-carrito">
                <thead>
                    <tr className="tr-carrito">
                        <th className="th-carrito">Imagen</th>
                        <th className="th-carrito">Cantidad</th>
                        <th className="th-carrito">Producto</th>
                        <th className="th-carrito">Valor</th>
                        <th className="th-carrito">Total</th>
                    </tr>
                </thead>
                <tbody>{LLamarDatos}</tbody>
                <tfoot>
                    <tr className="tr-carrito">
                    <td className="td-carrito"></td>
                    <td className="td-carrito"></td>
                    <td className="td-carrito"></td>
                        <td className="td-carrito">Total compra:</td>
                        <td className="td-carrito">$ {totalCompra.toLocaleString('es-CO')}</td>
                    </tr>
                </tfoot>
            </table>
            <OpcionesCarrito />
        </div>
    );
}

export default TablaCarrito;
