import React from 'react'; 

const Head = () => {
    return (
        <h1 className="blue">Un autre titre </h1>
        // ici on remarque qu'en faisant du style de cette manière, on n'a pas besoin d'importer le fichier css où figure le sélecteur 
        // 'blue' appelé car le composant ici est un sous composant du composant où on a importé la feuille de style, il est donc hérité. 
    )
}

export default Head; 