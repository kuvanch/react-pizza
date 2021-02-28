import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Header } from './components'
import { Cart, Home } from './pages'

function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
        .then(res => res.json())
        .then(data => setPizzas(data.pizzas))
    }, [])
    return (
        <div className="wrapper">
            <Header/>
          <div className="content">
              <Route path='/' exact render={() => <Home items={pizzas}/>}/>
              <Route path='/cart' exact component={Cart}/>
          </div>
        </div>

    )
}

export default App
