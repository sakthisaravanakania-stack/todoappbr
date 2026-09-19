import React from 'react'

const Header = ({ dispatch, filter }) => {
  
  const handleFilter = (e) => {
    dispatch({
      type: "SET_FILTER",
      payload: e.target.value
    })
  }
  return (
    <div className='header'>
      <div className='logo'>
        <h1>Welcome To Todo App</h1>

        <label>Filter:</label>
        <select id={filter}
          value={filter}
          onChange={handleFilter}
        >
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
    </div>
  )
}

export default Header
