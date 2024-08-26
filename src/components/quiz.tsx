import React, { useState, ChangeEvent } from "react";
import Balon from '../images/Balon.png'
import Cocina from '../images/cocina.jpg'
import Habitacion from '../images/habitacion.jpeg'
import TV from '../images/tv.jpg'


const Quiz = () => {

        const [textoIngresado1, setTextoIngresado1] = useState('');
        const [textoIngresado2, setTextoIngresado2] = useState('');
        const [textoIngresado3, setTextoIngresado3] = useState('');
        const [textoIngresado4, setTextoIngresado4] = useState('');
        const [resultado1, setResultado1] = useState('');
        const [resultado2, setResultado2] = useState('');
        const [resultado3, setResultado3] = useState('');
        const [resultado4, setResultado4] = useState('');
        const [puntaje, setPuntaje] = useState(0);
    
        const verificarPalabra = () => {
            const palabraCorrecta1 = "Cocina";
            const palabraCorrecta2 = "Habitacion";
            const palabraCorrecta3 = "Balon";
            const palabraCorrecta4 = "Televisor";
    
            let puntaje = 0;
    
            if (palabraCorrecta1 === textoIngresado1) {
                setResultado1("¡Palabra acertada!");
                puntaje += 1;
            } else {
                setResultado1(`La palabra correcta era: ${palabraCorrecta1}`);
            }
    
            if (palabraCorrecta2 === textoIngresado2) {
                setResultado2("¡Palabra acertada!");
                puntaje += 1;
            } else {
                setResultado2(`La palabra correcta era: ${palabraCorrecta2}`);
            }
    
            if (palabraCorrecta3 === textoIngresado3) {
                setResultado3("¡Palabra acertada!");
                puntaje += 1;
            } else {
                setResultado3(`La palabra correcta era: ${palabraCorrecta3}`);
            }
    
            if (palabraCorrecta4 === textoIngresado4) {
                setResultado4("¡Palabra acertada!");
                puntaje += 1;
            } else {
                setResultado4(`La palabra correcta era: ${palabraCorrecta4}`);
            }
    
            setPuntaje(puntaje);
        };
    
        return (
            <div style={{ width: '60%', height: '60%', marginLeft:'auto', marginRight: 'auto' }} >
    
                <div className="contenedor_1">
                    <div className="numero">1</div>
                    <div className="imagen">
                        <img src={Cocina} alt="Cocina"  style={{ width: '300px', height: '200px' }}/>
                    </div>
                    <div className="desc">Lugar de tu hogar en el que se preparan alimentos</div>
                    <div className="respuesta_usuario">
                        <input
                            type="text"
                            placeholder="Ingresa tu respuesta"
                            value={textoIngresado1}
                            onChange={(e) => setTextoIngresado1(e.target.value)}
                        />
                    </div>
                    <div className="respuesta_correcta1">{resultado1}</div>
                </div>
    
                <div className="contenedor_1">
                    <div className="numero">2</div>
                    <div className="imagen">
                        <img src={Habitacion} alt="Habitacion" style={{ width: '300px', height: '200px' }} />
                    </div>
                    <div className="desc">Lugar de tu hogar en el que duermes</div>
                    <div className="respuesta_usuario">
                        <input
                            type="text"
                            placeholder="Ingresa tu respuesta"
                            value={textoIngresado2}
                            onChange={(e) => setTextoIngresado2(e.target.value)}
                        />
                    </div>
                    <div className="respuesta_correcta2">{resultado2}</div>
                </div>
    
                <div className="contenedor_1">
                    <div className="numero">3</div>
                    <div className="imagen"> 
                        <img src={Balon} alt="Balon" style={{ width: '300px', height: '200px' }} />
                    </div>
                    <div className="desc">Objeto utilizado para jugar al futbol</div>
                    <div className="respuesta_usuario">
                        <input
                            type="text"
                            placeholder="Ingresa tu respuesta"
                            value={textoIngresado3}
                            onChange={(e) => setTextoIngresado3(e.target.value)}
                        />
                    </div>
                    <div className="respuesta_correcta3">{resultado3}</div>
                </div>
    
                <div className="contenedor_1">
                    <div className="numero">4</div>
                    <div className="imagen">
                        <img src={TV} alt="Televisor" style={{ width: '300px', height: '200px' }} />
                    </div>
                    <div className="desc">Utilizado para ver tus programas favoritos!</div>
                    <div className="respuesta_usuario">
                        <input
                            type="text"
                            placeholder="Ingresa tu respuesta"
                            value={textoIngresado4}
                            onChange={(e) => setTextoIngresado4(e.target.value)}
                        />
                    </div>
                    <div className="respuesta_correcta4">{resultado4}</div>
                </div>
    
                <div className="boton">
                    <button onClick={verificarPalabra}>Verificar</button>
                </div>
    
                <p id="puntaje" className="puntaje">Puntaje total obtenido: {puntaje}</p>
            </div>
        );
    };
    
    export default Quiz;