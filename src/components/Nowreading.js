import { useState,useEffect } from "react"
import usefetch from "../usefetch";
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Nowreading = () => { 
    


   const[users,setUsers]=useState([
    {Firstname:'Ndobo',Lastname:'Paulin Thomas',Dateofbirth:'01/07/2004',Course:'GIT',Status:'Student',id:'1'},
    {Firstname:'Ndobo',Lastname:'Paulien Thomas',Dateofbirth:'01/07/2004',Course:'GIT',Status:'Student',id:'2'},
    {Firstname:'Ndobo',Lastname:'Paulin Thomas',Dateofbirth:'01/07/2004',Course:'GIT',Status:'Student',id:'3'}
   ])




    return (  
                <div className="Profile">
                     {/* {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author ==='Josiane')} title='Now Reading ' supervisor={'Maka Maka'}/> }  */}
                    {users.map((users)=>(
                        <div className="userprofile bg-primary" key={users.id}>
                           <div className="profilemaincontainer">
                           <div className="userpicture">
                                <button className="changepicture"></button>
                                <button className="deletepicture"></button>
                            </div> 
                            <div class="row mb-3">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">{users.Firstname}</label>
                                 <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" id="colFormLabelSm"/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">{users.Lastname}</label>
                                 <div class="col-sm-10">
                                <input type="text" class="form-control form-control-sm" id="colFormLabelSm"/>
                                </div>
                            </div>
                           </div>
                            
                            

                        </div>

                    ))}
                </div>
    );
}
 
export default Nowreading;