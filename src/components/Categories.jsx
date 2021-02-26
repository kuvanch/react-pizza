import React, {useState} from 'react'

function Categories({items,onClick}) {
    const [activeItem, setActiveItem] = useState(null)
    const onSelectItem = (idx) => {
        setActiveItem(idx)
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
}

export default Categories
