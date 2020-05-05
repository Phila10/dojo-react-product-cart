import React from 'react'


function Form () {
    return (
        <div>
            <form className="field">
                <h2>Ajouter un produit</h2>
                    <div className="field">
                        <label>Nom</label>
                        <input type="text" id="name" name="name" onChange="" value="" />
                        </div>
                        <div className="field">
                        <label>Prix</label>
                        <input type="text" id="prix" name="prix" onChange="" value="" />
                    </div>
                <input type="submit" value="Ajouter" />
            </form>
        </div>
    )
}

export default Form;