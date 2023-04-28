import React from 'react'
import {RiCloseLine, RiDeleteBin6Line} from 'react-icons/ri'



function Cart(props) {
const { showOrder, toggleOrder} = props
  return (
    <div className={`lg:col-span-2 fixed lg:w-96 lg:right-0 top-0 bg-[#1f1d2b] w-full h-full transition-all z-50 ${showOrder ? 'right-0' : '-right-full'}` }>
        {/* Orders */}
        <div className='relative text-gray-300 pt-20 p-8 lg:p-4 h-full'>
          <RiCloseLine onClick={toggleOrder} className='lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 rounded-full bg-[#242836] text-xl'/>          {/* </span> */}
          <h1 className='text-2xl my-4'>Orders #23445</h1>
          {/* Chips */}
          <div className='flex items-center gap-4 flex-wrap mb-8'>
            <button className='py-2 px-4 rounded-xl bg-[#eb7b69] text-white'>
              Dine In
            </button>
            <button className='py-2 px-4 rounded-xl text-[#eb7b69] border border-gray-500'>
              To Go
            </button>
            <button className='py-2 px-4 rounded-xl text-[#eb7b69] border border-gray-500'>
              Delivery
            </button>
          </div>
          {/* Cart */}
          <div className=''>
            <div className='grid grid-cols-6 mb-4 px-4 mr-2'>
              <h5 className='col-span-4'>Item</h5>
              <h5 className=''>Qty</h5>
              <h5 className=''>Price</h5>
            </div>
            {/* Products */}
            <div className='h-[400px] md:h-[800px] lg:h-[400px] overflow-scroll lg:scrollbar-thin lg:scrollbar-thumb-black lg:scrollbar-track-black overflow-x-hidden'>
              {/* Product */}
              <div className='bg-[#242836] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4'>
                  {/* Product Description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img 
                      src="comida.png" 
                      alt=""
                      className='w-10 h-10 object-cover'
                    />
                    <div>
                      <h5 className='text-sm'>Spicy seasoned sea...</h5>
                      <p className='text-xs text-gray-500 mt-2'>$2.29</p>
                    </div>
                  </div>
                  <div >
                    <span>2</span>
                  </div>
                  <div >
                    <span>$4.67</span>
                  </div>
                </div>
                {/* Note */}
                <div className='grid grid-cols-6 items-center'>
                  <form className='col-span-5'>
                    <input 
                      type="text" 
                      placeholder='Order note...' 
                      className='bg-[#1f1d2b] py-2 px-5 rounded-md outline-none'/>
                  </form>
                  <div className=''>
                    <button className='border p-2 border-red-500 rounded-md'>
                      <RiDeleteBin6Line className='text-red-500'/>
                    </button>
                  </div>
                </div>
              
              </div>
              <div className='bg-[#242836] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4'>
                  {/* Product Description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img 
                      src="comida.png" 
                      alt=""
                      className='w-10 h-10 object-cover'
                    />
                    <div>
                      <h5 className='text-sm'>Spicy seasoned sea...</h5>
                      <p className='text-xs text-gray-500 mt-2'>$2.29</p>
                    </div>
                  </div>
                  <div >
                    <span>2</span>
                  </div>
                  <div >
                    <span>$4.67</span>
                  </div>
                </div>
                {/* Note */}
                <div className='grid grid-cols-6 items-center'>
                  <form className='col-span-5'>
                    <input 
                      type="text" 
                      placeholder='Order note...' 
                      className='bg-[#1f1d2b] py-2 px-5 rounded-md outline-none'/>
                  </form>
                  <div className=''>
                    <button className='border p-2 border-red-500 rounded-md'>
                      <RiDeleteBin6Line className='text-red-500'/>
                    </button>
                  </div>
                </div>
              
              </div>
              <div className='bg-[#242836] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4'>
                  {/* Product Description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img 
                      src="comida.png" 
                      alt=""
                      className='w-10 h-10 object-cover'
                    />
                    <div>
                      <h5 className='text-sm'>Spicy seasoned sea...</h5>
                      <p className='text-xs text-gray-500 mt-2'>$2.29</p>
                    </div>
                  </div>
                  <div >
                    <span>2</span>
                  </div>
                  <div >
                    <span>$4.67</span>
                  </div>
                </div>
                {/* Note */}
                <div className='grid grid-cols-6 items-center'>
                  <form className='col-span-5'>
                    <input 
                      type="text" 
                      placeholder='Order note...' 
                      className='bg-[#1f1d2b] py-2 px-5 rounded-md outline-none'/>
                  </form>
                  <div className=''>
                    <button className='border p-2 border-red-500 rounded-md'>
                      <RiDeleteBin6Line className='text-red-500'/>
                    </button>
                  </div>
                </div>
              
              </div>
              <div className='bg-[#242836] p-4 rounded-xl mb-4'>
                <div className='grid grid-cols-6 mb-4'>
                  {/* Product Description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img 
                      src="comida.png" 
                      alt=""
                      className='w-10 h-10 object-cover'
                    />
                    <div>
                      <h5 className='text-sm'>Spicy seasoned sea...</h5>
                      <p className='text-xs text-gray-500 mt-2'>$2.29</p>
                    </div>
                  </div>
                  <div >
                    <span>2</span>
                  </div>
                  <div >
                    <span>$4.67</span>
                  </div>
                </div>
                {/* Note */}
                <div className='grid grid-cols-6 items-center'>
                  <form className='col-span-5'>
                    <input 
                      type="text" 
                      placeholder='Order note...' 
                      className='bg-[#1f1d2b] py-2 px-5 rounded-md outline-none'/>
                  </form>
                  <div className=''>
                    <button className='border p-2 border-red-500 rounded-md'>
                      <RiDeleteBin6Line className='text-red-500'/>
                    </button>
                  </div>
                </div>
              
              </div>
              <div className='bg-[#242836] p-4 rounded-xl mb-8'>
                <div className='grid grid-cols-6 mb-4'>
                  {/* Product Description */}
                  <div className='col-span-4 flex items-center gap-3'>
                    <img 
                      src="comida.png" 
                      alt=""
                      className='w-10 h-10 object-cover'
                    />
                    <div>
                      <h5 className='text-sm'>Spicy seasoned sea...</h5>
                      <p className='text-xs text-gray-500 mt-2'>$2.29</p>
                    </div>
                  </div>
                  <div >
                    <span>2</span>
                  </div>
                  <div >
                    <span>$4.67</span>
                  </div>
                </div>
                {/* Note */}
                <div className='grid grid-cols-6 items-center'>
                  <form className='col-span-5'>
                    <input 
                      type="text" 
                      placeholder='Order note...' 
                      className='bg-[#1f1d2b] py-2 px-5 rounded-md outline-none'/>
                  </form>
                  <div className=''>
                    <button className='border p-2 border-red-500 rounded-md'>
                      <RiDeleteBin6Line className='text-red-500'/>
                    </button>
                  </div>
                </div>
              
              </div>
            </div>            
            
          </div>
          {/* Submit payment */}
          <div className='absolute bottom-0 left-0 p-4 w-full bg-[#242836]'>
            <div className='flex items-center justify-between mb-4'>
              <span className='text-gray-500'>Discount:</span>
              <span>$0</span>
            </div>
            <div className='flex items-center justify-between mb-6'>
              <span className='text-gray-500'>Subtotal:</span>
              <span>$201.03</span>
            </div>
            <div>
              <button className='bg-[#eb7b69] w-full py-2 px-4 rounded-lg'>
                Continue to payment
              </button>
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default Cart