import React, { useEffect } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import { Header } from './components'
import { Cart, Home } from './pages'
import { setPizzas } from './redux/actions/pizzas'
import { useDispatch } from 'react-redux'

function App() {

    const dispatch = useDispatch()
   
    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
        .then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        })
    }, [])
    return (
        <div className="wrapper">
            <Header/>
          <div className="content">
              <Route path='/' exact component={Home}/>
              <Route path='/cart' exact component={Cart}/>
          </div>
        </div>

    )
}
export default App