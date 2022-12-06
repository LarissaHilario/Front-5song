function Card2(props){
    return (
        <>
        <div>
            <img src ={props.img}></img>
            <span className='title'>{props.name}</span> 
            <span className='autor'>{props.autor}</span>
        </div>
        </>
        
    )
    }
    export default Card2;