function Card2(props){
    return (
        <>
        <div className='playlist-card'>
            <img src ={props.img}></img>
            <span className='title'>{props.artist}</span> 
            <span className='autor'>{props.name}</span>
            <span className='autor'>{props.duration}</span>
        </div>
        </>
        
    )
    }
    export default Card2;