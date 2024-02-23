import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greeting={"Hola a todos"}/>
            <ItemCount initial={1} stock={20} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        </div>
    );
}

export default App;
