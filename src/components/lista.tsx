import React from 'react'
import { useNavigate } from 'react-router-dom';
import OPC1 from '../images/concepto/minis/OPC1.jpg'
import OPC2 from '../images/concepto/minis/OPC2.jpg'
import OPC3 from '../images/concepto/minis/OPC3.jpg'
import OPC4 from '../images/concepto/minis/OPC4.jpg'

const Lista = () => {
    let navigate = useNavigate(); // Llama a useNavigate para obtener la función

    const seleccion = (row: number) => {
        navigate('/detalle', {
            state: { opc: row }
        });
    };
    
      return (
        <div style={{ margin: '0 auto', width: '30%' }}>
            <table>
            <tbody>
                <tr>
                    <td onClick={() => seleccion(1)} style={{ padding: '10px', cursor: 'pointer' }}>
                        <img src={OPC1} alt="OPC1" style={{ width: '300px', height: '200px' }} />
                    </td>
                    <td onClick={() => seleccion(2)} style={{ padding: '10px', cursor: 'pointer' }}>
                        <img src={OPC2} alt="OPC2" style={{ width: '300px', height: '200px' }} />
                    </td>
                </tr>
                <tr>
                    <td onClick={() => seleccion(3)} style={{ padding: '10px', cursor: 'pointer' }}>
                        <img src={OPC3} alt="OPC3" style={{ width: '300px', height: '200px' }} />
                    </td>
                    <td onClick={() => seleccion(4)} style={{ padding: '10px', cursor: 'pointer' }}>
                        <img src={OPC4} alt="OPC4" style={{ width: '300px', height: '200px' }} />
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};
    
    export default Lista;
    