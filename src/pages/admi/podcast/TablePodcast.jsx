
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, CardMedia, Divider, TableHead } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';

import styles from './table.module.css'

const TablePodcast =()=>{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       fetch('http://3.137.200.76:8080/podcast')
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
      <div className={styles.tableContainer}>
        <Paper sx={{ width: '70%' }}>
          <TableContainer >
            <Table
              sx={{ minWidth: 500 }}
            >
              <TableHead style={{ backgroundColor: '##A570BE' }}>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Descripcion</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Imagen</TableCell>
                  <TableCell>.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {posts.map(row => (
                  <TableRow
                    key={row.id}
                    align={row.align}
                    style={{ minWidth: row.minWidth }}
                   
                  >
                    <TableCell>{row.id} </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.creationDate}</TableCell>
                    <TableCell > 
                         <CardMedia  component="img"
                            sx={{ width: 60, height:60}}
                            image={ row.photoUrl}>
                        </CardMedia></TableCell>
                    <TableCell><Button variant="outlined" color="fifth"startIcon={<DeleteIcon />}>Eliminar</Button></TableCell>
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

export default TablePodcast;