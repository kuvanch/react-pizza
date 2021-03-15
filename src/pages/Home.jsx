import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {Categories,PizzaBlok,PizzaLoadingBlok,SortPopup} from '../components'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'
const categoryNames = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые']
const sortItems = [
	{name:'популярности',type:'popular', order:'desc'},
	{name:'цена',type:'price', order:'desc'},
	{name:'алфавиту',type:'name', order:'asc'}
	]

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const cartItem = useSelector(({cart}) => cart.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category , sortBy } = useSelector(({filters}) => filters)

    const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
    },[])
    const onSelectSortType = React.useCallback((type) => {
      dispatch(setSortBy(type))
    },[])
    useEffect(() => {
        dispatch(fetchPizzas(sortBy,category))
    }, [category,sortBy])

    const handleAddPizzaToCart = (obj) => {
      dispatch(addPizzaToCart(obj))
    }
    return (
        <div className="container">
        <div className="content__top">
          <Categories 
              activeCategory={category}
              onClickCategory={onSelectCategory}
              items={categoryNames}/>
          <SortPopup 
            onClickSortType={onSelectSortType}
            activeSortType={sortBy.type} items={sortItems}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          { 
            isLoaded ? items.map(obj => <PizzaBlok 
                addedCount={cartItem[obj.id] && cartItem[obj.id].items.length}
                onClickAddPizza={handleAddPizzaToCart} 
                key={obj.id} {...obj}/>) :
              Array(12).fill(0).map((_, index) => <PizzaLoadingBlok key={index}/>)
          } 
          
        </div>
      </div>
    )
}

export default Home
