
import CardList from '../Components/CardList'
import React, { useState, useEffect }  from 'react';
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'

function App () {
  
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')
  // let filteredRobots = []

    useEffect(() =>
      {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {setRobots(data); console.log('data', data)} 
          )
      }, []
      )
      
    const searchFunction = (e) => {
      setSearchfield(e.target.value)
    }       
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })
    console.log('test', filteredRobots)
    return (
      (!robots)?
      <h2>Loading ...</h2>:
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox onChange={searchFunction} />
        <ErrorBoundry>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </ErrorBoundry>
      </div>
     
    )
    
}

export default App;
