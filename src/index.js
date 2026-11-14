import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import pizzaData from './data/pizzaData';

const shopOpen = isShopOpen()

function isShopOpen() {
    const currentHour = new Date().getHours(); 
    if (currentHour >= 10 && currentHour < 22) {
        return true
    }
    return false
}


function App() {
    return (
    <div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div>
    );
}

function Menu() {
    const [searchText, setSearchText] = useState("");
    const displayPizzas = pizzaData.filter(pizza => pizza.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div className="menu">
            <h2>Our Menu</h2>
            { isShopOpen && <p>Authentic Italian cuisine, all from our stone oven</p> }

            <SearchBar searchText={searchText}
                setSearchText={setSearchText}/>

            <div className="pizzas">
                {displayPizzas.map((pizza, index) => (
                    <Pizza key={index} pizza={pizza} />
                ))
            }
            </div>
        
        </div>
    );
}

function Header() {
    return (
        <h1 style={{
            color: 'orange',
            fontSize: 48,
            textTransform: 'uppercase' 
        }}>
            Totally Pizzas
        </h1>
    );
}

function Pizza( { pizza } ) {
    return (
        <div className={pizza.soldOut ? "pizza sold-out" : "pizza"}>
            <img src={pizza.picture.src} alt={pizza.picture.alt}></img>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <p>{pizza.price}</p>
        </div>
    ) 
}

function Footer() {
    return (
        shopOpen ? (
            <Order />
        ) : (
            <p className="footer">Sorry we're closed</p>
        )
    )

}

function Order() {
    return (
        <div className="order">
            <p className="footer">We're currently open</p>
            <button className="btn">Order</button>
        </div>
    )
}


function SearchBar({searchText, setSearchText}) {
    return(
    <div className='searchBar'>
        <input type="text" 
            placeholder='search pizzas...' 
            value={searchText}
            onChange={(event) => {setSearchText(event.target.value)}}/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);