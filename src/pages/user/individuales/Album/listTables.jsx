import { styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Form from './form';
import TableSongs from './TablesSongs';

const listTable= () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [artistas, setArtistas] = useState([]);

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

  if (posts) {
    return (
      <div className={styled.container}>
        <TableSongs
          key={posts.id}
          name={posts.name}
          
        />
        <Form></Form>
      </div>
    );
  }
};
export default listTable;