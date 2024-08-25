import React from 'react';
import { useLocation } from "react-router-dom";
import Iron from '../images/concepto/minis/Iron.jpg';
import Harry from '../images/concepto/minis/Harry.jpeg';
import Wakanda from '../images/concepto/minis/Wakanda.jpeg';
import Intensamente from '../images/concepto/minis/Intensa.jpg'

const Detalle = () => {
    const location = useLocation();
    const c_opc = location.state ? location.state.opc : 1; // default to 1 if no data is passed
    alert({c_opc});

    const matrizInfo = [
        [Iron, 'Iron Man', '2008', 'Robert Downey Jr. (Tony Stark/Iron Man), Gwyneth Paltrow (Pepper Potts), Jeff Bridges (Obadiah Stane), Terrence Howard (James "Rhodey" Rhodes)', 'Tony Stark, un multimillonario ingeniero y empresario, es secuestrado y obligado a construir un arma devastadora. En su lugar, construye una armadura avanzada para escapar y decide usar su tecnología para combatir el mal bajo el nombre de Iron Man.' ],
        [Harry, 'Harry Potter Reliquias de la muerte 2', '2011', 'Daniel Radcliffe (Harry Potter), Emma Watson (Hermione Granger), Rupert Grint (Ron Weasley), Ralph Fiennes (Lord Voldemort).', 'La batalla final entre Harry Potter y Lord Voldemort culmina en Hogwarts, con la lucha decisiva por el destino del mundo mágico. Harry y sus amigos deben destruir los últimos Horrocruxes para derrotar a Voldemort.' ],
        [Intensamente, 'Intensamente 2', '2024','Amy Poehler (Alegría), Phyllis Smith (Tristeza), Bill Hader (Miedo), Lewis Black (Furia), Mindy Kaling (Desagrado).', 'Tras la muerte del rey T Challa, Wakanda enfrenta nuevos desafíos mientras sus líderes luchan por proteger su nación de amenazas externas. Se explora el legado del Pantera Negra y la llegada de un nuevo enemigo poderoso.' ],	
        [Wakanda, 'Wakanda Forever 2', '2022','Letitia Wright (Shuri), Lupita Nyongo (Nakia), Angela Bassett (Ramonda), Tenoch Huerta (Namor).', 'La batalla final entre Harry Potter y Lord Voldemort culmina en Hogwarts, con la lucha decisiva por el destino del mundo mágico. Harry y sus amigos deben destruir los últimos Horrocruxes para derrotar a Voldemort.' ],
       
    ];

    const selectedInfo = matrizInfo[c_opc - 1]; // Adjust index because c_opc is 1-based

    return (
        <div>
            <table border={1} >
                <tbody>
                    <tr style={{ height:'300px' }}  >
                        <td colSpan={1} >
                            <img
                                src={selectedInfo[0]}
                                alt={selectedInfo[1]}
                                style={{ width: '600px', height: '500px' }}/>
                        </td>
                        <td > Pelicula: </td>
                        <td>{selectedInfo[1]}</td>
                    </tr >
                    <tr>
                        <td></td>
                        <td>Año</td>
                        <td>{selectedInfo[2]}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Actores</td>
                        <td>{selectedInfo[3]}</td>
                        </tr>
                    <tr>
                        <td></td>
                        <td>Observaciones</td>
                        <td>{selectedInfo[4]}</td>
                        </tr>
                </tbody>
            </table>
            <h2></h2>
        </div>
    );
};

export default Detalle;
