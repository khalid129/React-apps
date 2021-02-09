import React from 'react';
import Cards from './Cards';
import data from './data';
import Navbar from './Navbar'
import Contact from './Contact';
import AboutUs from './AboutUs';
import Footer from './Footer';
import './index.css';
import './card.css';

function App() {
    return (<>
        <Navbar />
        <h1 className='heading'>Top Courses for Software Engineering 2021</h1>
        <div className='main'>
            {data.map((val)=> {
                return (
                    <Cards
                        key = {val.id}
                        imgscr={val.imgscr}
                        category={val.category}
                        name={val.name}
                        link={val.link}
                    />
                );
            })}
        </div>
        <Contact />
        <AboutUs/>
        <Footer/>
    </>);
}

export default App;