import React from 'react';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <h1>About</h1>
            <p>
            Lorem Ipsum est simplement un texte factice de l'industrie de l'impression et de la
             composition. Lorem Ipsum est le texte factice standard de l'industrie depuis les années 1500, 
             lorsqu'un imprimeur inconnu a pris une galère de caractères et l'a brouillé pour en faire un livre 
             spécimen de caractères. Il a survécu non seulement à cinq siècles, mais aussi
              au saut dans la composition électronique, restant essentiellement inchangé. Il a
               été popularisé dans les années 1960 avec la sortie de feuilles Letraset contenant des
                passages de Lorem Ipsum, et plus récemment avec des
             logiciels de PAO comme Aldus PageMaker incluant des versions de Lorem Ipsum.
            </p>
            
        </div>
    );
};

export default About;