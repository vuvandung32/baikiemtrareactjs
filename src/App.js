
import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div class="shopping-cart-container mt-5">
        <div className="container">
             <div class="row">
                <div class="col-md-12">
                    <div class="mb-4">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>
                <Product />
            </div>
          
        </div>
        </div>
  );
}

export default App;
