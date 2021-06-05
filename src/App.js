import {useState} from 'react';
import './App.sass';


function App() {

 const notas = [
   {
     nombre: 'Do',
     link: require('./notes/do.wav'),
     sostenido : true
   },
   {
     nombre: 'Re',
     link: require('./notes/re.wav'),
     sostenido : true
   },
   {
     nombre: 'Mi',
     link: require('./notes/mi.wav'),
   },
   {
     nombre: 'Fa',
     link: require('./notes/fa.wav'),
     sostenido : true
   },
   {
     nombre: 'Sol',
     link: require('./notes/sol.wav'),
     sostenido : true
   },
   {
     nombre: 'La',
     link: require('./notes/la.wav'),
     sostenido : true
   },
   {
     nombre: 'Si',
     link: require('./notes/si.wav'),
   }
 ]

 const handleClickNote = nota => {
  setSonando(nota.nombre);
  const sonido = new Audio(nota.link.default);
  sonido.play();
  setColor('color-azul')
 }
//  Hook UseState
//  1.- Variable inicial
//  2.- Funcion que se dedique a actualizar la variable
// 3.- El valor inicial de esa varibale
 const [click, setClick] = useState(0);
 const [sonando, setSonando] = useState('');
 const [color, setColor] = useState('')

//  let click = 0;

 const handlerClickCount = () => {
   setColor('color-fondo');
   setClick(click + 1);
  }

  setTimeout(() =>{
    setSonando('')
    setColor('')
  },300)

  // const color = 'color-azul';

  return (
    <div>
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho por Male 😀</h2>
        <h3 className="esta-sonando">{sonando}</h3>
        <button onClick={handlerClickCount}>Has dado {click} clicks </button>
      </div>
      <div className="container">
        {notas.map(nota => (
          <div
            key={Math.random() * 100}
            className={`nota ${sonando === nota.nombre && 'sonando'}`}
            onClick={() => handleClickNote(nota)}
          >
            {nota.sostenido && <div className="negra"></div>}
            {/* {nota.sostenido ? <div className="negra"></div> : null} */}
          </div>
        ))}
        {/* <div className="nota" onClick={handleClickNote}>
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota"></div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota">
          <div className="negra"></div>
        </div>
        <div className="nota"></div> */}
      </div>
    </div>
  );
}

export default App;
