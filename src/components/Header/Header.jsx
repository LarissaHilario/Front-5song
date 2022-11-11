import SearchIcon from '@mui/icons-material/Search';
import './Header.css'

const Header=({title})=>{
    return(
        <>
        <h3>{title}</h3>
                 <input className='buscador'type="search" placeholder="Buscar canción" id="Buscador" />
    </>
    )
}

export default Header

