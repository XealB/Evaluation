const ListeDepense = ({liste}) => {

    const list = () => {
        return liste.map((i) => {
            return (
                <li>{i}</li>
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