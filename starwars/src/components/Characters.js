import React from "react";
import './StarWars.css';

export default function Characters({name,homeworld,films}) {
    return (
        <div className = "Characters">
           <div className="card-text">
                <h1>{name}</h1>
            <section> home <a href={homeworld}>{homeworld}</a> </section>
            <p>{films.forEach(film =>{return {film}})} </p>
        </div> 
            </div>
    );
}