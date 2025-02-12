import { useState } from "react";
import useDepenseContext from "../context/depenseContext";


const AddDepense = () => {

    const [label, setLabel] = useState('');
    const [montant, setMontant] = useState('');
    const [category, setCategory] = useState('');
    const {dispatch} = useDepenseContext();

    const options = () => { 
        var arr = ["Alimentation","Logement","Transport","Divertissement","Santé","Éducation","Autres"]
        return arr.map((i) => {
            return <option key={arr.indexOf(i)} value={i}>{i}</option>
        })}

        const handleSubmit = (e) => {
            e.preventDefault();
    
            const nouvelleDepense = {
                id: Date.now(),
                label,
                montant: parseFloat(montant),
                category,
                
            };
            dispatch({ type: 'addItem', payload: nouvelleDepense})
    
            setLabel('')
            setMontant('')
            setCategory('')
        };

    return(
        <div>
            <h3>Ajouter une dépense</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Libellé"
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Montant"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                    required
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Category</option>
                    {options()}
                </select>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )

}

export default AddDepense
