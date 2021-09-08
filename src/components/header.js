import { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { NavLink } from 'react-router-dom'


export default function Header(props) {

  const [data, setData] = useState([props]);
  const [sortedData, setSortedData] = useState([])
  const [perPage] = useState(15);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0)

 

  

  return (
    <>
    <div className=" mb-4 pb-4 bg-purple-700">
      <h1 className="pt-6 mb-6 text-white  font-extrabold font-mono text-2xl">Angular repositories contributors</h1>

      <div className="relative inline-flex">

        <NavLink to={{ pathname: `/` }} >
          <button className="bg-purple-400 rounded mt-1 mr-4 p-1 px-4 text-white">Home</button>
        </NavLink>
        <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
          <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero" /></svg>
      
        <select className="border ml-48 border-gray-300 rounded-full 
  text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          
          <option value='contributions'>Contributons</option>
          <option value='followers'>Followers</option>
          <option value='repositories'>Repositories</option>
          <option value='gists'>Gist</option>

        </select>
      </div>
    </div>
    
    
    </>

  )
}


