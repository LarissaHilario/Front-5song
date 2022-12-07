import { Button, CardMedia, Divider, TableHead } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import styles from './table.module.css'
const TableSongs =()=>{
    const [posts, setPosts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
       fetch('http://3.19.59.225:8080/artist/'+ id)
          .then((response) => response.json())
          .then((data) => {
             console.log(data.data);
             setPosts(data.data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
   
    return(
       <div>
      <br></br>

      <br></br>
      <div >
        <Paper sx={{ width: '70%', height:'50%' }}>
          <TableContainer >
            <Table
              sx={{ minWidth: 400 }}
            >
              <TableHead style={{ backgroundColor: '##A570BE' }}>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Duracion</TableCell>
                  <TableCell>Artista</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {posts.map(row => (
                  <TableRow
                    key={row.id}
                    align={row.align}
                    style={{ minWidth: row.minWidth }}
                   
                  >
               
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.duration}</TableCell>
                    <TableCell>{row.artist.name}</TableCell>
                   
                  </TableRow>
))}
              </TableBody>
              
            </Table>
          </TableContainer>
        </Paper>
      </div>

    </div>
  );
};

export default TableSongs;