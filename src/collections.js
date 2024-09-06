import { useState,useEffect } from "react"
import usefetch from "./usefetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const Collections = () => {

    const[newcollections,setNewcollections]=useState()
useEffect(() => {
    fetch('http://localhost:8000/newcollections')
    .then(res => {
        return res.json()
})
.then(data => {
    console.log(data)
   setNewcollections(data)
})
console.log(newcollections)
});


    return ( 
        
        <div className="collectiondiv">
            <div className="collections">
                <p className="fw-bold fs-1">Collections</p>
                <div className="colbutcontainer">
                            <button className="colbuttons">All</button>
                            <button className="colbuttons">Favorites</button>
                        </div>
                    <div className="collectcontainer">
                            {newcollections && newcollections.map((newcollections) =>(

                        <div className="maincollection">
                            <div className="collimg"></div>
                            <br />
                           <p className="fs-4 fw-bold text-center"> {newcollections.name}</p>
                        
                            <p className="text-end fw-bold fst-italic">5 items</p>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
     );
}
 
export default Collections;