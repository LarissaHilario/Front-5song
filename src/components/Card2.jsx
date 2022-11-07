function Card2(props){
    return (
        <>
        <div className='playlist-card'>
            <img src ={props.img}></img>
            <span className='title'>{props.title}</span> 
            <span className='autor'>{props.autor}</span>
            <span className='autor'>{props.duration}</span>
        </div>
        </>
        
    )
    }
    export default Card2;