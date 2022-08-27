import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieEdit, setMovieEdit] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/movies/${id}`)
        //console.log(response);
        setMovieEdit(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);

  const handleChange = (e) => {
    setMovieEdit(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMovie = await axios.put(`http://localhost:8000/api/v1/movies/${id}`, movieEdit);
      navigate(`/movie/${newMovie.data.data._id}`)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <h2>Edit movie</h2>
      {!movieEdit && <p>Loading</p>}
      {movieEdit && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={movieEdit.title} onChange={handleChange} />
          <input type="text" name="director" placeholder="Director" value={movieEdit.director} onChange={handleChange} />
          <input type="number" name="year" placeholder="Year" value={movieEdit.year} onChange={handleChange} />
          <input type="number" name="duration" placeholder="Duration" value={movieEdit.duration} onChange={handleChange} />
          <button type="submit">Save changes</button>
        </form>
      )}
    </div>
  )
}
