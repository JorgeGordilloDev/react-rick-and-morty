import { useEffect, useState } from "react"
import Character from "./Character"

const CharacterList = () => {
	const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [page, setPage] = useState(1)
	
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
			const data = await response.json()
			setCharacters(data.results)
			setIsLoading(false)
		}
		getData()
	
		return () => {
			null
		}
	}, [page])
	
	const NavPage = () => {
		return (
			<div className="d-flex justify-content-between aling-items-center">
				<p>Page: { page }</p>
				<button className="btn btn-primary btn-samll"
					onClick={e => setPage(page+1)}
				>
					Page {page+1}
				</button>
			</div>
		)
	}
	
	return (
		<div className="container">
			<NavPage />

			{isLoading ? (
				<h1>Cargando..</h1>
			) : (	
				<div className="row">
					{characters.map(character => (
						<Character key={character.id} data={character} />
					))}
				</div>
			)}
			
			<NavPage />
		</div>
	)
}

export default CharacterList
