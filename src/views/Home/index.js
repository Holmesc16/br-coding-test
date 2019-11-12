import React, { useState } from 'react'
import { apiURL, useFetch } from '../../utils'

const Home = props => {
    const { restaurants, loading } = useFetch(apiURL)
    const [state, setState] = useState({})
    
    return (
       <div>
        {loading ? 
        <h1>Loading</h1>
       : <div>
           <ul>
               <li>{restaurants}</li>
           {/* {restaurants.map(restaurant => {
               return (
                <li>{restaurant}</li>
               )
           })} */}
           </ul>
         </div>
         }
       </div>
    )
}

export default Home