import React from 'react'

export const Pagination = ({num, setPage}) => {
  return (
    <div>
      <button onClick={() => setPage(num)}>
        {num}
      </button>
    </div>
  )
}
