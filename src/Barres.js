import React from 'react'; 

const Barres = (props) => {
    return (

            <svg className='customBarres' width="23.999999999999996" height={props.height} xmlns="http://www.w3.org/2000/svg">
                {/* On remarque que l'on peut passer un style directement dans index.css puisque index.js importe le composant <App /> */}
                <g>
                    <title>background</title>
                    <rect fill={props.color} id="canvas_background" height={props.height} width="582" y="-1" x="-1"/>
                </g>
                <g>
                    <title>Layer 1</title>
                    <path id="svg_1" d="m5,12l-2,0c-1.1,0 -2,0.9 -2,2l0,6c0,1.1 0.9,2 2,2l2,0c1.1,0 2,-0.9 2,-2l0,-6c0,-1.1 -0.9,-2 -2,-2z"/>
                    <path id="svg_2" d="m13,2l-2,0c-1.1,0 -2,0.9 -2,2l0,16c0,1.1 0.9,2 2,2l2,0c1.1,0 2,-0.9 2,-2l0,-16c0,-1.1 -0.9,-2 -2,-2z"/>
                    <path id="svg_3" d="m21,8l-2,0c-1.1,0 -2,0.9 -2,2l0,10c0,1.1 0.9,2 2,2l2,0c1.1,0 2,-0.9 2,-2l0,-10c0,-1.1 -0.9,-2 -2,-2z"/>
                </g>
            </svg>
            // Là c'est pour montrer qu'on peut faire passer des props directement dans le code d'une image svg 

    )
}

export default Barres; 