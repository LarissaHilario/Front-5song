import SearchIcon from '@mui/icons-material/Search';


const Header=({title})=>{
    return(
        <>
        <h3>{title}</h3>
                 <input className='buscador'type="search" placeholder="Buscar canción" id="Buscador" />
    </>
    )
}

export default Header

