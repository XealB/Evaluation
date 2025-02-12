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
                <tr key={i.id}>
                    <td>{i.label}</td>
                    <td>{i.montant}€</td>
                    <td>{i.category}</td>
                    <td><button onClick={() => handleDelete(i.id)}>Supprimer</button></td>
                </tr>
                </>
            )
        })}
    
    return(
        <>
            <h3>Liste de vos depense</h3>
            <table>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Montant</th>
                        <th>Categorie</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list()}
                </tbody>

            </table>
        </>
    )

}

export default ListeDepense