import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from './Square'

export const Board = () => {
  const squares = useSelector(store => store.game.squares)

  console.log(squares)

  return (
    <div className='board'>
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
