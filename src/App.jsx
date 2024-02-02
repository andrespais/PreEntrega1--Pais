import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    return (
        <div>
            <Navbar/>
            <ItemListContainer greeting={"Hola a todos"}/>
        </div>
    );
}

export default App;
