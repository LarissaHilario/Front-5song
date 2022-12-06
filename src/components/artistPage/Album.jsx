
const Album=({id, name, photoUrl, image})=>{

        return (
            <div className="container-card">
                <img className="imagePlay" src={image} />
                <div className="card-title">
                    <h2>{name}</h2>
                </div>

            </div>
        )

}

export default Album;