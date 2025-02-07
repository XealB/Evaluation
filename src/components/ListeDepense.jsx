import useDepenseContext from "../context/depenseContext"

const ListeDepense = () => {

    const {state, dispatch} = useDepenseContext()
    const {depensesList} = state

    const handleDelete = (id) => {
        dispatch({ type: 'deleteItem', payload: id });
    };

    const list = () => {
        return depensesList.map((i) => {
            return (
                <>
                <li key={i.id}>{i.label} --- {i.montant}€ --- {i.category}
                <button onClick={() => handleDelete(i.id)}>Supprimer</button>
                </li>
                </>
            )
        })}
    
    return(
        <>
            <h3>Liste de vos depense</h3>
            <ul>
                {list()}
            </ul>
        </>
    )

}

export default ListeDepense