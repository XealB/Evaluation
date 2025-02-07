import useDepenseContext from "../context/depenseContext"

const TotalDepense = () => {

    const {state} = useDepenseContext()
    const {totalDepense} = state

    return(
        <>
            Vos depense totales : {totalDepense}$
        </>
    )
}
export default TotalDepense