import React from 'react';
import Highlight from './ui/Highlight';

function Highlights() {
  return (
    <section id='highlights'>
        <div className="container">
            <div className="row">
                <h2>Why choose <span className='purple'>Library</span></h2>
                <div className="highlight__wrapper">
                    <Highlight icon="bolt" subtitle="Easy and Quick" para="Get access to the book you purchased online instantly." />
                    <Highlight icon="book-open" subtitle="10,000+ Books" para="Library has books in all your favourite categories." />
                    <Highlight icon="tags" subtitle="Affordable" para="Get your hands on popular books for as little as $10." />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights;