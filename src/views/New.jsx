import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function New() {
  const navigate = useNavigate();
  const [newMovie, setNewMovie] = useState({
    title: '',
    year: '',
    director:'',
    duration:'',
    synopsis:'',
    image:''
  })

  const handleChange = (e) => {
    setNewMovie(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMovies = await axios.post('http://localhost:8000/api/v1/movies', newMovie);
      navigate(`/movies/${newMovies.data.data._id}`)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <h2>Create a movie</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
          <input type="text" name="director" placeholder="Director" value={newMovie.director} onChange={handleChange} />
          <input type="number" name="year" placeholder="Year" value={newMovie.year} onChange={handleChange} />
          <input type="number" name="duration" placeholder="Duration" value={newMovie.duration} onChange={handleChange} />
          <input type="text" name="duration" placeholder="Duration" value={newMovie.duration} onChange={handleChange} />
          <button type="submit">Save changes</button>
        </form>

      
    </div>
  )
}
