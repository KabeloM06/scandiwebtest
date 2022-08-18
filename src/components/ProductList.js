import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductList() {
  return (
    <div>
        [Nav bar]
        <nav className='nav'>
            <div className='container'>
                <h1 className='page'>Product List</h1>
                <div className='listbuttons'>
                    <button className='add-product-button'>
                        <Link to="addproduct">
                            ADD
                        </Link>
                        
                    </button>
                    <button id='delete-product-button'>Mass Delete</button>
                </div>
            </div>
        </nav>

        [List of items in grid]
        <section>
            <div className='container'>
                <div className='list'>
                    <div className='list-items'>
                    <input type="checkbox" className='delete-checkbox'></input>
                        <div>item1 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                    <input type="checkbox" className='delete-checkbox'></input>
                        <div>item2 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                    <input type="checkbox" className='delete-checkbox'></input>
                        <div>item3 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                        <input type="checkbox" className='delete-checkbox'></input>
                        <div>item4 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                        <input type="checkbox" className='delete-checkbox'></input>
                        <div>item4 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                        <input type="checkbox" className='delete-checkbox'></input>
                        <div>item4 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                        <input type="checkbox" className='delete-checkbox'></input>
                        <div>item4 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                        <input type="checkbox" className='delete-checkbox'></input>
                        <div>item4 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                    <div className='list-items'>
                        <input type="checkbox" className='delete-checkbox'></input>
                        <div>item4 code</div>
                        <div>item name</div>
                        <div>item price</div>
                        <div>item desc</div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}
