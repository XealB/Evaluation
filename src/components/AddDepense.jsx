import { useState } from "react";
import useDepenseReducer from "../reducer/depenseReducer";

const AddDepense = () => {

    const options = () => { 
        var arr = ["Alimentation","Logement","Transport","Divertissement","Santé","Éducation","Autres"]
        return arr.map((i) => {
            return <option key={i} value={i}>{i}</option>
        })}

        const [label, setLabel] = useState('');
        const [montant, setMontant] = useState('');
        const [category, setCategory] = useState('');
        const [state, dispatch] = useDepenseReducer();
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          const nouvelleDepense = {
            label,
            montant: parseFloat(montant),
            category,
          };
      
          dispatch({ type: 'addItem', payload: nouvelleDepense })
      
          setLabel('')
          setMontant('')
          setCategory('')
        }

    return(
        <div>
            <h3>Ajouter une depense</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={label} onChange={(e) => setLabel(e.target.value)}/>
                <input type="number" value={montant} onChange={(e) => setMontant(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    {options()}
                </select>
                <button type="submit" >Ajouter</button>
            </form>
        </div>
    )

}

export default AddDepense
