import React, {Component} from 'react';
import Barres from './Barres';  

class Form extends Component {

    state = {
        username : '', 
        color : '', 
        colors : ['', 'Green', 'Blue', 'Yellow', 'Pink', 'Red'], 
        comments : ""
    }

    changePassword = (e) => {
        this.setState({
            username : e.target.value
        })   
    }

    changeSelect = (e) => {
        this.setState({
            color : e.target.value
        }) 
    }

    changeTextarea = (e) => {
        this.setState({
            comments : e.target.value
        })
    }

    validateEntry = () => {
        console.log(`Username: ${this.state.username} Color: ${this.state.color} Comments: ${this.state.comments}`);
        // pour récupérer les infos entrées à la validation du formulaire. Comprendre mieux le coup du back tick et du dollar...
        // et comprendre pourquoi mon console.log ne s'affiche que pendant une demie seconde...
    }

    render () {
        return (
            <div className="App">
                <Barres color={this.state.color} height="50" /> {/* comme ça on change la couleur du logo à la sélection de la couleur sur le select */ }
                <h1> Commentaires </h1>
                <form onSubmit={this.validateEntry}> 
                    <div>
                        <label>Password :  </label>
                        <input type="password" value={this.state.username} onChange={this.changePassword} />
                        <p> Le password est : {this.state.username} </p>
                        <hr />
                    </div>

                    <div>
                        <label>Choisis une couleur ! </label> 
                            <select value="Color" name='Color' onChange={this.changeSelect}>
                                {
                                    this.state.colors.map((color, index) => {
                                        return <option key={index} value={color}> {color} </option>
                                    })
                                }
                            </select>  
                        <p> {this.state.color} </p>                       
                    </div>

                    <div>
                        <label> Commentaires </label>
                        <textarea onChange={this.changeTextarea}></textarea>
                        <br />
                        <button>Valider </button>
                    </div>




                </form>
            </div>
        )
    }
}

export default Form; 