
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Newpost = () => {

   
        // State to manage the list of items
        const [items, setItems] = useState([
          '1 of 3',
          'Variable width content',
          '3 of 3',
        ]);
      
        // Function to add a new item
        const addItem = () => {
          setItems([...items, 'New Item']);
        };

    
    return ( 
        <div className="Newpost container text-center">
            <h2>Add a anew blog</h2>
            <p>resd</p>

             {/* Render the list of items */}
      <div className="row justify-content-md-center">
        {items.map((item, index) => (
          <div key={index} className="col col-lg-2">
            {item}
          </div>
        ))}
      </div>

      {/* Button to add a new item */}
      <button onClick={addItem} className="btn btn-primary mt-4">
        Add New Item
      </button>
        </div>
     );
}
 
export default Newpost;
