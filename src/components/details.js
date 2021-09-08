import React from 'react'
import  {useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Header from './header'
import {getRepos,getRepoLists } from '../api/services'


export default function Details(props) {
    const [repos, setRepos] = useState([])
    const [followers, setFollowers] = useState([])
    const [repoLists, setRepoList] = useState([])
 

    const name = props.match.params.name
    console.log(name);

    useEffect(() => 
  {
        const fetchData = async() => {
             
         const response = await getRepos(name)
         const result = await getRepoLists(name)
         
         console.log(result.data);
         console.log(response.data);
        
        setRepos(response.data)
        setRepoList(result.data)
      }
   fetchData()
  }, [])


    return (
        <div>
            <Header />

            {repoLists.map((item) =>

<ul className="flex gap-6 m-2 p-2 rounded border border-gray-400 text-gray-700 mx-10 px-4 pt-4 mt-4 text-sm">
    <li className="w-16 border pl-2">
    <img src={repos.avatar_url} className="w-8  rounded-full " /> 
    </li>

   <p className="w-20 border">{name}</p>

    <li className="w-40 border border-yellow">

      Repo Name:<br></br> 
      <p className='font-bold'>
      {item.name}</p>
    </li>
    <li className="w-80 border border-yellow">

      Repo Url:<br></br> <p className='text-blue-400'>
          {item.git_url}</p>
    </li>
   
    <li className=" border border-yellow w-28 truncate...">
    Total Repos:<br></br> 
    <p className="">{repos.public_repos}</p>
    </li>
    <li className="w-20 border border-yellow ">
        Followers: <br></br>{repos.followers}
    </li>
    <li className=" border border-yellow w-16">
      
        Gist: <br></br>{repos.public_gists}
    </li>

   < li className=" border border-yellow w-24">
      <NavLink to={{ pathname: `/${item.full_name}` }} >
          <button className="bg-green-400 rounded p-2 px-4 text-white">Details</button>
         </NavLink>

  </li>
</ul>

       
            )}
        </div>
    )
}
