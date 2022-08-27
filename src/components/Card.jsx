import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function Card(props) {

  const {movie} = props;
  console.log(props)
  return (
    // Use to display each one of the movies
    <div>
    <p><Link to={`/movie/${movie._id}`}><img src= {`${movie.image}`}  /> {movie.title}</Link></p>
    </div>
  )
}
