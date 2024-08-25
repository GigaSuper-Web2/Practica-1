import { useLocation } from "react-router-dom";
import '../styles/factura.css'
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Factura = () => {
    const location = useLocation();
    const c_nombre = location.state ? location.state.nombre : "sin datos";
    const c_platofuerte = location.state ? location.state.platofuerte : "sin datos externos xd";
    const c_opcionales = location.state ? location.state.opcionales : [];
    const c_bebida = location.state ? location.state.bebida : "sin datos externos xd";


    const preciosPlatosFuertes: { [key: string]: number } = {
        "Pollo en salsa": 15,
        "Costilla de cerdo agridulce": 18,
        "Pescado en salsa de ostiones": 20,
        "Beefsteack a la barbacoa": 12
    };

    let precioPlato = 0;
    if (c_platofuerte in preciosPlatosFuertes) {
        precioPlato = preciosPlatosFuertes[c_platofuerte as keyof typeof preciosPlatosFuertes];
    }

    const preciosOpcionales: { [key: string]: number } = {
        "Aros de cebolla": 50,
        "Vinagreta": 30,
        "Verduras al vapor": 40,
        "Tortilla Casera": 20,
        "Puré": 25
    };

    const precioOpcionales = c_opcionales.reduce((total: number, opcional: string) => {
        return total + (preciosOpcionales[opcional] || 0);
    }, 0);

    const preciosBebida: { [key: string] : number } = {
        "Gaseosa" : 5,
        "Natural" : 4,
        "Café Negro" : 5,
        "Café con leche" : 6,
        "Agua" : 3,
    }

    let precioBebida = 0;
    if (c_bebida in preciosBebida) {
        precioBebida = preciosBebida[c_bebida as keyof typeof preciosBebida];
    }

    //parte de la factura
    var subtotal = 0; // sin impuestos
    var impuestos = 0; // 0.15 de todo
    var total = 0; //  subtotal + impuestos
    const now = new Date();
    const formattedDateTime = now.toLocaleString(); 
    

    subtotal = precioPlato + precioOpcionales + precioBebida
    impuestos= subtotal * 0.15
    total = subtotal + impuestos

    let navigate = useNavigate();

    
    useEffect(() => {
        setTimeout(() => {
            navigate('/combos');
        }, 3000);
    }, [navigate]);



    return(
        <div>

            <table>
                <thead>
                    <tr>
                        <th className="izq" >Universidad Tecnica Nacional</th>
                        <th></th>
                        <th>Factura: </th>
                        <td>0000001</td>
                    </tr>
                    <tr>
                        <th className="izq abaj">Sistema Integrado de Sodas Universitaria</th>
                        <td className="abaj"></td>
                        <th className="abaj">Fecha</th>
                        <td className="abaj">{formattedDateTime}</td>
                    </tr>
                </thead>
                <tbody  >
                    <tr >
                        <th className="izq ">Cliente</th>
                        <td className="izq  ">{c_nombre}</td>
                        <th className="der">Precio $</th>
                    </tr>
                    <tr>
                        <th className="izq" >Plato Fuerte</th>
                        <td >{c_platofuerte}</td>
                        <td className="der">{precioPlato}</td>
                    </tr>
                    <tr>
                        <th className="izq">Opcionales: </th>
                        <td className="izq" ><ul className="izq">
                    {c_opcionales.map((opcional: string, index: number) => (
                            <p className="izq" key={index}>
                                {opcional} 
                            </p>
                        ))}
                    </ul>  </td>
                    <td><ul className="der">
                    {c_opcionales.map((opcional: string, index: number) => (
                            <p key={index}>
                                {preciosOpcionales[opcional]}
                            </p>
                        ))}
                    </ul>  </td>
                    </tr>
                    <tr>
                        <th className="izq">Bebida: </th>
                        <td>{c_bebida}</td>
                        <td className="der">{precioBebida}</td>
                    </tr>
                    <tr>
                        <th className="izq">Subtotal: </th>
                        <th></th>
                        <td className="der" >{subtotal}</td>
                    </tr>
                    <tr>
                        <th className="izq abaj">Impuestos: </th>
                        <td className="abaj" >15%(iva)</td>
                        <td className="der abaj">{impuestos}</td>
                    </tr>

                    <tr>
                        <th className="izq">Total:</th>
                        <td></td>
                        <td className="der">{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}
export default Factura; 


