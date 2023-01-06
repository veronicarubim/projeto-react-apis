export const goToPokeList = (navigate) => {
    navigate("/")
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goToDetail = (navigate, id) => {
    navigate(`/detalhes/${id}`)
}