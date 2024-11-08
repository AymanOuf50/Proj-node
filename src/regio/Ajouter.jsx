import React from 'react'

export default function Ajouter() {
  
  return (
    <div>
        <form >
        <div>
        <label htmlFor="nom">Nom : </label>
        <input type="text" id='nom' name='nom' value={newstagier.nom} onChange={handelinput} /><br /></div>

        <div>
        <label htmlFor="prenom">Prenom : </label>
        <input type="text" id='prenom' name='prenom' value={newstagier.prenom} onChange={handelinput} /><br /></div>

        <div>
        <label htmlFor="ville">Ville : </label>
        <input type="text" id='ville' name='Ville' value={newstagier.Ville}onChange={handelinput} /><br /></div>

        <div>
        <label htmlFor="fil">Fil : </label>
        <input type="text" id='fil' name='Fil' value={newstagier.Fil} onChange={handelinput} /><br /></div>

        <div>
        <label htmlFor="photo">Photo : </label>
        <input type="file" id='photo' name='photo' value={newstagier.photo}/><br /></div>
        <button type='submit' onClick={submitForm} >ajouter stagiaire</button>
        </form>
    </div>
  )
}
