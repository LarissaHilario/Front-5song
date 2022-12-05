import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, Divider, TableHead } from '@mui/material';
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
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import styles from './table.module.css';

const Tables = () => {
  
  const { artist } = useSelector(state => state.artist);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  

 

  return (
    
      <div className={styles.tableContainer}>
        <Paper sx={{ width: '70%' }}>
          <TableContainer>
            <Table
              sx={{ minWidth: 500 }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Artista</TableCell>
                  <TableCell>Oyentes</TableCell>
                  <TableCell>Foto</TableCell>
                  <TableCell>.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {artist?.slice.map(row => (
                  <TableRow
                    key={row.id}
                    align={row.align}
                    style={{ minWidth: row.minWidth }}
                  >
                    <TableCell>{row.id} </TableCell>
                    <TableCell>{row.name} </TableCell>
                    <TableCell>{row.listener} </TableCell>
                    <TableCell > 
                         <CardMedia  component="img"
                            sx={{ width: 60, height:60}}
                            image={ row.photoUrl}>
                        </CardMedia>
                        </TableCell>
                    <TableCell><Button variant="outlined" color="fifth"startIcon={<DeleteIcon />}>Eliminar</Button></TableCell>
                  </TableRow>
                 
                ))}
              </TableBody>
              
            </Table>
          </TableContainer>
        </Paper>
      </div>
  );
};

export default Tables;
