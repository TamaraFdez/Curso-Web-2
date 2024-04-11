import raton from "../images/raton.png"
import ciervo from "../images/ciervo.jpg"
import dragon from "../images/dragoin.jpg"
import gato from "../images/gato.jpg"

const Card = ()=> {
    const cards = [
        {image: raton, name: "Raton Molón"},
        {image: ciervo, name: "Mini-ciervo"},
        {image: dragon, name: "Dragon de tormenta"},
        {image: gato, name:"Navigato"}
    ]
	return (
		<div className="card" key={cards[1].image} >
			<img src={cards[1].image} alt={cards[1].name}></img>
			<br></br>
			<span>
				<strong>{cards[1].name}</strong>
			</span>
		</div>
	);
}

export default Card;