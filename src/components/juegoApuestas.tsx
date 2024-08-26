import React, { useState, useEffect } from 'react';
import dadoCara1 from '../images/juegoApuestas/img/cara1.png';
import dadoCara2 from '../images/juegoApuestas/img/cara2.png';
import dadoCara3 from '../images/juegoApuestas/img/cara3.png';
import dadoCara4 from '../images/juegoApuestas/img/cara4.png';
import dadoCara5 from '../images/juegoApuestas/img/cara5.png';
import dadoCara6 from '../images/juegoApuestas/img/cara6.png';
import imgNeutro from '../images/juegoApuestas/img/neutro.png';
import imgGanar from '../images/juegoApuestas/img/ganar.jpg';
import imgPerder from '../images/juegoApuestas/img/perder.jpg';

interface Usuario {
    nombre: string;
    Monto: number;
    CantidadDados: string;
    montoApostado?: number;
    numeroApostado?: number;
}

const JuegoApuestas: React.FC = () => {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [nombre, setNombre] = useState<string>('');
    const [monto, setMonto] = useState<string>('');
    const [cantidadDados, setCantidadDados] = useState<string>('2');
    const [montoApostar, setMontoApostar] = useState<string>('');
    const [numeroElegido, setNumeroElegido] = useState<string>('');
    const [resultado, setResultado] = useState<string>('');
    const [dados, setDados] = useState<string[]>([]);
    const [imgResultado, setImgResultado] = useState<string>(imgNeutro);
    const [enRegistro, setEnRegistro] = useState<boolean>(true);

    useEffect(() => {
        if (!usuario) {
            const usuarioData = localStorage.getItem("usuario");
            if (usuarioData) {
                const usuarioParsed: Usuario = JSON.parse(usuarioData);
                setUsuario(usuarioParsed);

                const dadosArray = [];
                for (let i = 1; i <= parseInt(usuarioParsed.CantidadDados, 10); i++) {
                    dadosArray.push(`dado${i}Container`);
                }
                setDados(dadosArray);
            }
        }
    }, [usuario]);

    const handleRegistro = () => {
        const usuarioData = {
            nombre,
            Monto: parseFloat(monto),
            CantidadDados: cantidadDados
        };

        localStorage.setItem("usuario", JSON.stringify(usuarioData));
        setUsuario(usuarioData);
        setEnRegistro(false);
    };

    const apostar = () => {
        if (usuario) {
            const monto = parseInt(montoApostar, 10);
            if (isNaN(monto) || monto <= 0) {
                setResultado("Por favor ingresa un monto válido para apostar.");
                return;
            }
            if (monto > usuario.Monto) {
                setResultado("El monto a apostar no puede ser mayor que el monto disponible.");
            } else {
                usuario.Monto -= monto;
                usuario.montoApostado = monto;
                localStorage.setItem("usuario", JSON.stringify(usuario));
                setUsuario({ ...usuario });
                setResultado("Apuesta realizada. Elige un número y presiona Jugar.");
            }
        }
    };

    const elegirNumero = () => {
        if (usuario) {
            const numElegido = parseInt(numeroElegido, 10);
            if (isNaN(numElegido) || numElegido < 2 || numElegido > (usuario.CantidadDados === '2' ? 12 : 18)) {
                setResultado("Por favor ingresa un número válido para apostar.");
                return;
            }
            usuario.numeroApostado = numElegido;
            localStorage.setItem("usuario", JSON.stringify(usuario));
            setResultado("Número elegido correctamente. Presiona Jugar.");
            document.getElementById("btnJugar")!.style.display = 'block';
        }
    };

    const jugar = () => {
        if (usuario) {
            let sumaDados = 0;
            dados.forEach((dado) => {
                const resultadoDado = Math.floor(Math.random() * 6) + 1;
                sumaDados += resultadoDado;
                const dadoImg = document.getElementById(dado)!.querySelector('.dadoImg') as HTMLImageElement;
                dadoImg.src = getDadoImagePath(resultadoDado);
            });

            let resultadoTexto = `Dado(s) lanzado(s). Resultado total: ${sumaDados}. `;
            if (sumaDados === usuario.numeroApostado) {
                usuario.Monto += usuario.montoApostado! * 2;
                resultadoTexto += "¡Has ganado!";
                setImgResultado(imgGanar);
            } else {
                resultadoTexto += "Has perdido, mejor suerte la próxima vez.";
                setImgResultado(imgPerder);
            }
            localStorage.setItem("usuario", JSON.stringify(usuario));
            setUsuario({ ...usuario });
            setResultado(resultadoTexto);
        }
    };

    const getDadoImagePath = (resultadoDado: number) => {
        switch (resultadoDado) {
            case 1: return dadoCara1;
            case 2: return dadoCara2;
            case 3: return dadoCara3;
            case 4: return dadoCara4;
            case 5: return dadoCara5;
            case 6: return dadoCara6;
            default: return dadoCara1;
        }
    };

    const formatCurrency = (value: number) => {
        return '₡ ' + value.toLocaleString();
    };

    return (
        <div>
            <h1>¡Las Apuestas de Yorki!</h1>
            {enRegistro ? (
                <div id="registro">
                    <h2>Datos para comenzar a jugar</h2>
                    <form>
                        <fieldset>
                            <div>
                                <label>Nombre de Jugador:</label>
                                <input 
                                    type="text" 
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    maxLength={15}
                                    size={20} 
                                    required 
                                    autoFocus 
                                />
                            </div>
                            <div>
                                <label>Monto a apostar:</label>
                                <input 
                                    type="text" 
                                    value={monto}
                                    onChange={(e) => setMonto(e.target.value)}
                                    maxLength={15}
                                    size={20} 
                                    required 
                                />    
                            </div>
                            <div id="seleccionDados">
                                <label>Cantidad de dados:</label>
                                <input 
                                    type="radio" 
                                    id="dosDados" 
                                    name="cantidadDados" 
                                    value="2" 
                                    checked={cantidadDados === '2'}
                                    onChange={() => setCantidadDados('2')}
                                />
                                <label htmlFor="dosDados" className="inline">2 dados</label>
                                <input 
                                    type="radio" 
                                    id="tresDados" 
                                    name="cantidadDados" 
                                    value="3" 
                                    checked={cantidadDados === '3'}
                                    onChange={() => setCantidadDados('3')}
                                />
                                <label htmlFor="tresDados" className="inline">3 dados</label>
                            </div>
                            <div>
                                <button type="button" onClick={handleRegistro}>Aceptar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            ) : (
                <div id="juego">
                    <div id="infoJugador">
                        <p>Jugador: <span id="nombreJugador">{usuario?.nombre}</span></p>
                        <p>Monto Disponible: <span id="montoDisponible">{formatCurrency(usuario?.Monto || 0)}</span></p>
                    </div>
                    <div id="apuesta">
                        <label htmlFor="montoApostar">Monto a Apostar:</label>
                        <input 
                            type="number" 
                            id="montoApostar" 
                            min="1" 
                            value={montoApostar}
                            onChange={(e) => setMontoApostar(e.target.value)}
                        />
                        <button type="button" onClick={apostar}>Apostar</button>
                    </div>
                    <div id="eleccionNumero">
                        <label htmlFor="numeroElegido">Número a Apostar:</label>
                        <input 
                            type="number" 
                            id="numeroElegido" 
                            min="2" 
                            max={usuario?.CantidadDados === '2' ? 12 : 18} 
                            value={numeroElegido}
                            onChange={(e) => setNumeroElegido(e.target.value)}
                        />
                        <button type="button" onClick={elegirNumero}>Elegir Número</button>
                    </div>
                    <div id="dadosContainer">
                        {dados.map((dado, index) => (
                            <div key={index} id={dado} style={{ display: 'none' }}>
                                <img src={dadoCara1} alt={`Dado ${index + 1}`} className="dadoImg" />
                            </div>
                        ))}
                    </div>
                    <div id="resultadoImagen">
                        <div>Estatus</div> 
                        <img src={imgResultado} alt="Resultado de la apuesta" />
                    </div>
                    <div id="mensajeResultado">
                        <p>{resultado}</p>
                    </div>
                    <button id="btnJugar" style={{ display: 'none' }} onClick={jugar}>Jugar</button>
                </div>
            )}
        </div>
    );
};

export default JuegoApuestas;
