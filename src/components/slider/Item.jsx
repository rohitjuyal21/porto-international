import { Button, Paper } from '@mui/material'
import React from 'react'

const Item = ({ item }) => {
  return (
    <Paper className='item' key={item.id}>
      <img src={item.image} alt={`img ${item.id}`} />
      <div className='item__content'>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <Button className="item__btn">
          <a href={item.link}>More</a>
        </Button>
      </div>

    </Paper>
  )
}

export default Item
