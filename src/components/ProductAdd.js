import React, {useState} from 'react'
import { Link } from 'react-router-dom'



export default function ProductAdd() {
    const [showhide, setShowhide]=useState('');

    const handleshowhide=(event)=>{
        const getproduct = event.target.value;
        setShowhide(getproduct);
    }
  return (
    <div className='page'>
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
                <label >SKU</label>
                <input id='sku'></input>
            </div>
            <div className='product_label'>
                <label >Name</label>
                <input id='name'></input>
            </div>
            <div className='product_label'>
                <label >Price</label>
                <input id='price'></input>
            </div>
            <div className='product_label'>
                <label>Type Switcher</label>
                <select id='productType' type="selectlist" onChange={(e)=>(handleshowhide(e))}>
                    <option value="">--Select Product--</option>
                    <option value="dvd">DVD</option>
                    <option value="furniture">Furniture</option>
                    <option value="book">Book</option>
                </select>
            </div>
            {
                showhide==='dvd' && (
                    <div id='DVD' className='dynamic'>
                        <div className='product_label'>
                            <label >Size (MB)</label>
                            <input id='size'></input>
                            
                        </div>
                        <p>Please enter the file size of the DVD in MB</p>
                    </div>
                )}
                {
                    showhide==='furniture' && (
                        <div id='#Furniture' className='dynamic'>
                            <div className='product_label'>
                                <label >Height (CM)</label>
                                <input id='height'></input>
                                
                            </div>
                            <div className='product_label'>
                                <label >Width (CM)</label>
                                <input id='width'></input>
                                
                            </div>
                            <div className='product_label'>
                                <label >Length (CM)</label>
                                <input id='length'></input>
                                
                            </div>
                            <p>Please provide dimensions in HxWxL format</p>
                        </div>
                    )
                }
                {
                    showhide==='book' && (
                        <div id='DVD' className='dynamic'>
                            <div className='product_label'>
                                <label >Weight (KG)</label>
                                <input id='weight'></input>
                                
                            </div>
                            <p>Please enter the weight of the book in kg</p>
                        </div>
                    )
                }
                
                
            
            
            
        </form>
    </div>
  )
}

