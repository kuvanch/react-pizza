import React from 'react'
import { useSelector } from 'react-redux'

import {Categories,PizzaBlok,SortPopup} from '../components'

function Home() {
    const { items } = useSelector(({pizzas}) => {
        return {
            items: pizzas.items
        }
    })

   
    return (
        <div className="container">
        <div className="content__top">
          <Categories 
              items={['Мясные','Вегетарианская','Вегетарианская','Острые','Закрытые']}/>
          <SortPopup items={[
            {name:'популярности',type:'popular'},
            {name:'цена',type:'price'},
            {name:'алфавиту',type:'alphabet'}
            ]}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            items.map(obj => {
              return <PizzaBlok key={obj.id} {...obj}/>
            })
          }
        </div>
      </div>
    )
}

export default Home
