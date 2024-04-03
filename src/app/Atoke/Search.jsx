"use client"
import { useState } from "react"
import { IoIosSearch } from "react-icons/io"


export default function Search() {
  const [sort, setSort] = useState('')

  function searchTopic(e){
    setSort(e.target.value)
  }




  return (
    <div className="flex items-center border-2 border-gray-200 rounded-full  w-1/2 p-4 mt-9">
       <input type="text" name='text' id='text' placeholder='search for products or category' className='outline-none border-none pl-8 pt-3 w-5/6'
       defaultValue={sort} onChange={searchTopic}
      />
      <IoIosSearch/>
    </div>
  )
}