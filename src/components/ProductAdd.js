import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductAdd() {
  return (
    <div>
        <nav className='nav'>
            <div className='container'>
                <h1 className='page'>Product Add</h1>
                <div className='listbuttons'>
                    <button>Save</button>
                    <button>
                        <Link to="/">
                            Cancel
                        </Link>
                    </button>
                </div>
            </div>
        </nav>

        [form]
        <form id="product_form" className='container'>
            <div className='product_label'>
                <label>SKU</label>
                <input></input>
            </div>
            <div className='product_label'>
                <label>SKU</label>
                <input></input>
            </div>
            <div className='product_label'>
                <label>SKU</label>
                <input></input>
            </div>
            <div className='product_label'>
                <label>SKU</label>
                <select type="selectlist">
                    <option>DVD</option>
                    <option>Furniture</option>
                    <option>Book</option>
                </select>
            </div>

            
            
        </form>
    </div>
  )
}

