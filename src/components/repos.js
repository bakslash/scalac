import React from 'react'
import  {useState, useEffect } from 'react'
import axios from 'axios'
import Header from './header'

function Repos(props) {

    const full_name = props.location.pathname
    console.log(full_name);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const response = await axios.get('https://api.github.com/repos'+ full_name +'/contributors')

            setData(response.data)
            console.log(response.data);
        }

        fetchData()
    }, [])
    return (
        <div>
              <Header {...props}/>
      {data.map((item) =>

<ul className="flex justify-around m-2 p-2 border border-gray-400 text-gray-700 mx-16 px-4 pt-4 mt-4 text-sm">
    <li className="w-28 border border-yellow">

        <img src={item.avatar_url} className="w-12 rounded-full " />
    </li>

    <li className=" border border-yellow w-40">
        Contributors:<br></br> {item.login}

    </li>
    <li className=" border border-yellow w-40">
        Contributions: <br></br>{item.contributions}
    </li>
    <li className="w-72 border border-yellow ">
        Github url: <br></br>
        <p className="text-blue-400">{item.url}</p>
    </li>
    
</ul>
)}
        </div>
    )
}

export default Repos
