import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



export default function Movie() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const navigate = useNavigate();
  console.log(id)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`)
        //console.log(response);
        setMovieDetail(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/movies/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <h2>Movie details</h2>
      {movieDetail && (
        <div>
          <h6>Movie: {movieDetail.title}</h6>
          <p>Director: {movieDetail.director}</p>
          <button onClick={handleDelete}>Delete movie</button>
          <button onClick={() => navigate(`/edit/${id}`)}>Edit movie</button>
        </div>)}
      {!movieDetail && <p>Project not found</p>}

    </div>
  )
}
