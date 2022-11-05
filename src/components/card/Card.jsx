import "../card/card.css"

const Card=({title,image,button})=> {
    return (
        <>
        <div className="card">
            <img className="image" src={image} />
            <div className="card-top">
                <h2>{title}</h2>
            </div>
            <button className="btn">{button}</button>
        </div> 
        </>
    )
    }
    export default Card;