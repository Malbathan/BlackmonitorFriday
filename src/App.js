import './App.css';
import Products from './components/products';
import Provider from './context/provider';

function App() {
  return (
    <div className="App">
      <Provider>
        <Products />
      </Provider>
    </div>
  );
}

export default App;
