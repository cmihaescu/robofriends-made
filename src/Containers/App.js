
import CardList from '../Components/CardList'
import {Component} from 'react'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import ErrorBoundry from '../Components/ErrorBoundry'

class App extends Component {
  constructor (){
    super()
    this.state ={
      robots:[],
      searchfield:''
    }
  }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data=> this.setState({robots:data}))
    }
 
     searchFunction = (e) => {
       this.setState({searchfield:e.target.value})
    }
    
    render(){
   const filteredRobots = this.state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
   })
    return(
      (!this.state.robots)?
      <h2>Loading ...</h2>:
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox onChange={this.searchFunction} />
        <ErrorBoundry>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </ErrorBoundry>
      </div>
    )
  }
}

export default App;
