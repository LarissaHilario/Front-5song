import { useSelector } from 'react-redux';

import { Button, CardMedia, TableHead } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
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
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import styles from './table.module.css'
const Tables =()=>{
    const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
    const [posts, setPosts] = useState([]);
    const { artistas} = useSelector(state => state.artistas);
    
  
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      function TablePaginationActions(props) {
        const theme = useTheme();
        const { count, page, rowsPerPage, onPageChange } = props;
    
        const handleFirstPageButtonClick = event => {
          onPageChange(event, 0);
        };
    
        const handleBackButtonClick = event => {
          onPageChange(event, page - 1);
        };
    
        const handleNextButtonClick = event => {
          onPageChange(event, page + 1);
        };
    
        const handleLastPageButtonClick = event => {
          onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };
    
        return (
          <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label='primera pagina'
            >
              {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
              onClick={handleBackButtonClick}
              disabled={page === 0}
              aria-label='página anterior'
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </IconButton>
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label='siguiente página'
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label='última página'
            >
              {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
          </Box>
        );
      }
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
                  <TableCell>Oyentes</TableCell>
                  <TableCell>Imagenes</TableCell>
                  <TableCell>.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
              {(rowsPerPage > 0
                  ? artistas?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : artistas
                )?.map(row => (
                  <TableRow
                    key={row.id}
                    align={row.align}
                    style={{ minWidth: row.minWidth }}
                   
                  >
                    <TableCell>{row.id} </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.listener}</TableCell>
                    <TableCell > 
                         <CardMedia  component="img"
                            sx={{ width: 60, height:60}}
                            image={ row.photoUrl}>
                        </CardMedia></TableCell>
                    <TableCell>
                        <Button variant="outlined" 
                                color="fifth"
                                startIcon={<DeleteIcon />}>
                         Eliminar
                        </Button>
                    </TableCell>
                  </TableRow>
))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: 'All', value: -1 },
                    ]}
                    colSpan={3}
                    count={artistas?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: {
                        'aria-label': 'rows per page',
                      },
                      native: true,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default Tables;