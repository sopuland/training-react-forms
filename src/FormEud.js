import React, {Component} from 'react'; 
import './FormEud.css'; 
import Head from './MyHeaderOne';
import styles from './myHeaderOne.module.css'; 


const pinkHeader = {
    fontSize: '75px', 
    color: 'pink'
}

class FormEud extends Component { 

    render () {
        
        const myClass = this.props.head ? ("blue") : ("red");

        return (
            <div>
                <h1 style={{fontSize: '50px', color: 'red'}}>Commentaires</h1> {/* pour le style inline, j'ouvre les accolades pour écrire du JS
                (j'écris en réalité un objet js entre accolades, il en faut donc deux paires), j'écris toutes les propriétés en camelCase, et leurs valeurs comme une string */}
                <h2 style={pinkHeader}> Sous titre </h2> {/* je peux aussi créer mon objet de style dans une constante à l'extérieur de ma classe, et l'importer dans mon h2 par ex */}
                <h3 className="blue"> Test </h3> {/* 3ème solution donc, écrire du css dans un fichier annexe, l'importer et appeler les bons selecteurs */}
                <p className={`${myClass} bigFont`}>Je suis rouge ou bleu</p>
                { /* 4ème solution c'est en faisant passer une props depuis l'élément parent App et qui active un sélecteur css ou un autre */}
                { /* pour rajouter une seconde classe css il y a la solution className={myClass + ' bigFont'} bigFont, ou alors j'utilise un backtick comme écrit ci-dessus */}
                <button> Valider </button>
                <p className={styles.green}>Second test</p> { /* Autre solution pour importer du style : créer un fichier xxx.module.css et l'importer
                De cette manière, le style n'est pas hérité par l'enfant. On peut donc faire du style local sans risques */}
                <Head />
            </div>
        )
    }
}

export default FormEud; 