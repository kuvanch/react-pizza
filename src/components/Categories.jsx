import React, {useState} from 'react'

const Categories = React.memo(function Categories({items,onClickItem}) {
  const [activeItem, setActiveItem] = useState(null)
  const onSelectItem = (idx) => {
      setActiveItem(idx)
      onClickItem(idx)
  }
  return (
      <div className="categories">
        <ul>
        <li  className={activeItem === null ? 'active' : ''}
          onClick={() => setActiveItem(null)}>Все</li>
            {
               items && items.map((name,i) => {
                    return <li 
                      className={activeItem === i ? 'active' : ''}
                      onClick={() => onSelectItem(i)}
                      key={`${name}_${i}`} >{name}</li> 
                })
            }
        </ul>
      </div>
  )
})

export default Categories
