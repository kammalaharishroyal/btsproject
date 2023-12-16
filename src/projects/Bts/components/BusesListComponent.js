import '../btproject.css'
import React from 'react';
import Card from './Card';
import BusCompo from './BusCompo';
import { Outlet } from 'react-router-dom';
function BusesListComponent() {
    const [result,setresult]=React.useState([])
    
    React.useEffect(()=>{fetch("http://localhost:8080/bus/")
    .then((data)=>data.json())
    .then(x=>setresult(x))
    },[])
   
  
    return(
        <>
        <div>
            
       
        <div className='buses-list-body'>
       
            <div className='buses-list-cards'>
                
                {
                    result.map(
                        (data)=>{
                            return <BusCompo mobile={data.number} mail={data.availble} />
                        }
                    )
                }

            </div>
            

           
        </div>
        <Outlet/>
        </div>
      

        </>

    )
}
 





export default BusesListComponent;