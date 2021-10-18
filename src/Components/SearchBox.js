import React from 'react'

const SearchBox = ({onChange}) => {

  return (
    <div>
      <h2 >Search your robot here:</h2>
      <input 
      type='search'
      className='tc pa3 ba b--green bg-lightest-blue' 
      placeholder='robot name'
      onChange={onChange}
      ></input>
    </div>
  )
}

export default SearchBox;
