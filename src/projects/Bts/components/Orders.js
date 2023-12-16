import React from "react";
import '../btproject.css';
function Orders(){
    const [result,setresult]=React.useState([])
    
    React.useEffect(()=>{fetch("http://localhost:8080/order/")
    .then((data)=>data.json())
    .then(x=>setresult(x))

    },[])
    console.log("len",result);
    return (
        <div>
        <div className="orders">
            <table className="table">
                <tr>
                <th >orderId</th>
                <th>customerName</th>
                <th>busNumber</th>
                <th>DriverName</th>
                <th>Village</th>
                <th>Pin Code</th>
                </tr>
                <tbody  className="rows">
                   {
                   result.map((x=>{
                    return <tr>
                        <td>{x.orderId}</td>
                        <td>{x.customerName}</td>
                        <td>{x.orderId}</td>
                        <td>{x.busNumber}</td>
                        <td>{x.adress.village}</td>
                        <td>{x.adress.pinCode}</td>
                    </tr>
                   }))


                   }
                   
                </tbody>
                

            </table>
        </div>
        </div>
    )

}

export default Orders;