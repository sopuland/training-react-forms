import React, {Component} from 'react'; 
import styled from 'styled-components'; 

const Parag = styled.p`
    color : green; 
    font-size: 40px; 
`

const TitleEud = styled.button`
    background : black; 
    color: #ffffff;
    padding: 10px 15px; 
`

class CompoTestBootstrap extends Component {


    render () {
        return (
            <div>
                <h1>Test pour bootstrap</h1>
                <button className="btn btn-danger"> Clique ici si t'es un homme</button>
                { /* exemple d'importation d'un bouton bootstrap. Se rendre sur la doc pour connaitre toutes les classes bootstrap */}
                { /* désavantage de bootstrap c'est que du code est importé même dans les endroits où il n'est pas nécessaire. Pour ne pas surcharger notre code 
                et appliquer du style sympa seulement sur les éléments nécessaires, nous privilégierons styled-components.com  */}
                <Parag>Encore un essai pour styled-components </Parag>
                <TitleEud>Et oui, encore un !</TitleEud>
                { /* Autre façon avec un autre framwork : styled-components. Aller sur le site pour voir la doc. L'installer, l'importer, et voir comment l'utiliser 
                car il a une syntaxe bien à lui avec les back ticks et le changement de nom des balises ! */}
            </div>
        )
    }
}

export default CompoTestBootstrap; 