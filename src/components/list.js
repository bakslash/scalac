import { useState, useEffect } from 'react'
import {getUsers} from '../api/services'
import { NavLink } from 'react-router-dom'
import Header from './header'




export default function List(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUsers()
            setData(response.data)
            console.log(response.data);
        }

        fetchData()
    }, [])
    console.log(props);

    return (
<>
<Header />
        <div>

            {data.map((item) =>

                <ul className="flex justify-around m-2 p-2 border border-gray-400 text-gray-700 mx-16 px-4 pt-4 mt-4 text-sm">
                    <li className="w-28 border border-yellow">

                        <img src={item.avatar_url} className="w-12 rounded-full " />
                    </li>

                    <li className=" border border-yellow w-40">
                        Username:<br></br> {item.login}

                    </li>
                    <li className=" border border-yellow w-40">
                        Contributions: <br></br>{item.contributions}
                    </li>
                    <li className="w-72 border border-yellow ">
                        Github url: <br></br>
                        <p className="text-blue-400">{item.html_url}</p>
                    </li>
                    <li className=" border border-yellow w-40">
                        <NavLink to={{ pathname: `/${item.login}` }} >
                            <button className="bg-green-400 rounded p-2 px-4 text-white">Details</button>
                        </NavLink>

                    </li>
                </ul>
            )}


        </div>
</>
    )


}
