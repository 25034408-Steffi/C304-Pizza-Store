import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

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
    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <Pizza 
                picture={{
                    src: './pizza_images/spinaci.jpg',
                    alt:'spinaci pizza'
                }}
                name='Spinach Pizza'
                desc='Tomato, mozarella, spinach, and ricotta cheese'
                price={10}
            />
            <Pizza 
                picture={{
                    src:'./pizza_images/salamino.jpg',
                    alt:'salamino pizza'
                }}
                name='Salamino Pizza'
                desc='insert desc'
                price={12}
            />
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
            Pizza Store
        </h1>
    );
}

function Pizza( { picture, name, desc, price } ) {
    return (
        <>
            <img src={picture.src} alt={picture.alt}></img>
            <h3>{name}</h3>
            <p>{desc}</p>
            <p>{price}</p>
        </>
    ) 
}

function Footer() {
    const currentHour = new Date().getHours(); 
    if (currentHour >= 10 && currentHour < 22) {
        return <p className="footer">We're currently open</p>
    } else {
        return <p className="footer">Sorry we're closed</p>

    }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


