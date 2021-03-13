import React from 'react'
import PropTypes from 'prop-types'
const Categories = React.memo(function Categories(
  {items,onClickCategory, activeCategory}) {
  
  return (
      <div className="categories">
        <ul>
        <li  className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>Все</li>
            {
               items && items.map((name,i) => {
                    return <li 
                      className={activeCategory === i ? 'active' : ''}
                      onClick={() => onClickCategory(i)}
                      key={`${name}_${i}`} >{name}</li> 
                })
            }
        </ul>
      </div>
  )
})
Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number,null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
}
Categories.defaultProps = { activeCategory: null, items:[] }

export default Categories
