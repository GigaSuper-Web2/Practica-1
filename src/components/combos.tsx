import {useNavigate} from "react-router-dom";
import '../styles/problema2.css'

import React, { useState, ChangeEvent } from "react";


export const Combos = () => {
    const [Nombre, setNombre] = useState("");
    const [platofuerte, setPlatofuerte] = useState("");
    const [opcionales, setOpcionales] = useState<string[]>([]);
    const [bebida, setBebida] = useState("");    

    const opcional = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setOpcionales([...opcionales, value]);
        } else {
            setOpcionales(opcionales.filter(opcional => opcional !== value));
        }
    };

    let navigate = useNavigate();

    const cancelar = () => {
        setNombre("");
        setPlatofuerte("");
        setOpcionales([]);
        setBebida("");

        //lo del html
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => (checkbox as HTMLInputElement).checked = false);

        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => (radio as HTMLInputElement).checked = false);
    };

    return (
        <div className="contenedor">
            <div>
                <label>Cliente:</label>
                <input 
                    type="text" 
                    onChange={(e) => setNombre(e.target.value)} 
                    value={Nombre} 
                    className="cliente" 
                /> 
            </div>
            <br/><br/>
            <table className="formato">
                <thead>
                    <tr>
                        <th className="lightblue" >Combo 1</th>
                        <th className="yellow centro" >Combo 2</th>
                        <th className="green" >Combo 3</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td> <br /> </td>
                </tr>
                <tr>
                    <td className="green linea" >Plato Fuerte</td>
                    <td className="lightblue linea centro" >Opcionales</td>
                    <td className="yellow linea" >Bebida</td>
                </tr>
                <tr>
                    <td className="green linea">
                        <select 
                            name="plato_fuerte" 
                            id="cmb1opciones" 
                            onChange={(e) => setPlatofuerte(e.target.value)} 
                            value={platofuerte}>
                            <option value="Pollo en salsa" >Pollo en salsa</option>
                            <option value="Costilla de cerdo agridulce">Costilla de cerdo agridulce</option>
                            <option value="Pescado en salsa de ostiones">Pescado en salsa de ostiones</option>
                            <option value="Beefsteack a la barbacoa">Beefsteack a la barbacoa </option>
                        </select>
                    </td>
                    <td className="lightblue linea centro">
                        <input type="checkbox" id="opcion1" value="Aros de cebolla" onChange={opcional} /> Aros de cebolla 
                        <br />
                        <input type="checkbox" id="opcion2" value="Vinagreta" onChange={opcional} /> Vinagreta
                        <br />
                        <input type="checkbox" id="opcion3" value="Verduras al vapor" onChange={opcional} /> Verduras al vapor
                        <br />
                        <input type="checkbox" id="opcion4" value="Tortilla Casera" onChange={opcional} /> Tortilla Casera 
                        <br />
                        <input type="checkbox" id="opcion5" value="Puré" onChange={opcional} /> Puré
                        <br />
                    </td>
                    <td className="yellow linea"> 
                        <input type="radio" id=" bebida1" value="Gaseosa" onChange={(e) =>setBebida(e.target.value)} /> Gaseosa<br />                        
                        <input type="radio" id=" bebida2" value="Natural" onChange={(e) =>setBebida(e.target.value)} /> Natural<br />
                        <input type="radio" id=" bebida3" value="Café Negro" onChange={(e) =>setBebida(e.target.value)} /> Café Negro<br />
                        <input type="radio" id=" bebida4" value="Café con leche" onChange={(e) =>setBebida(e.target.value)} /> Café con leche<br />
                        <input type="radio" id=" bebida5" value="Agua" onChange={(e) =>setBebida(e.target.value)} /> Agua<br />
                    </td>
                </tr>
                </tbody>
            </table>

            <button className="button b" onClick={cancelar}> Cancelar </button>
            <button className="button a" onClick={ () =>
                navigate('/factura', {
                    state: {
                        nombre: Nombre, 
                        platofuerte: platofuerte,
                        opcionales: opcionales, 
                        bebida: bebida
                    }
                })}> Aceptar
            </button>
        </div>
    );
}


const Nose = () => {
    return(
        <div>
            {Combos()}
        </div>
    );
}
export default Nose;