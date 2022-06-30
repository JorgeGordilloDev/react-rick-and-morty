const Character = ({ data }) => {
	return (
		<div className="col-3 text-center p-5">
			<h3>{ data.name }</h3>
			<img className="img-fluid rounded-pill" src={ data.image } alt={ data.name } />
			<p>{ data.origin.name }</p>
		</div>
	)
}

export default Character
