import React from 'react'
import {Categories,PizzaBlok,SortPopup} from '../components'

function Home({items}) {
    return (
        <div className="container">
        <div className="content__top">
          <Categories 
              items={['Мясные','Вегетарианская','Вегетарианская','Острые','Закрытые']}/>
          <SortPopup items={['популярности','цена','алфавиту']}/>
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
