import { Paper } from '@mui/material'
import React from 'react'

const Item = ({ item }) => {
  return (
    <Paper className='item' key={item.id}>
      <img src={item.image} alt={`img ${item.id}`} />
      <div className='item__content'>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
          <a href={item.link} className='item__link'>
            <span>More</span>
          </a>
        
      </div>

    </Paper>
  )
}

export default Item
