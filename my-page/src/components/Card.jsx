import React from 'react';
import '../styles/card.css';

function Card({ name, description, html_url }) {
    return (
        <a
            className="container__card"
            href={html_url}
            target="_blank"
            rel="noopener noreferrer">
            <section className="container__card-descr">
                <h3>{name}</h3>
                <p>
                {description}
                </p>
            </section>
        </a>
    );
}

export default Card;
