import { useState,useEffect } from "react"
import usefetch from "./usefetch";
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Profile = () => { 
   const[users,setUsers]=useState( 
//     [
//     {Firstname:'Ndobo',Lastname:'Paulin Thomas',Dateofbirth:'01/07/2004',Course:'GIT',Status:'Student',id:'1'},
//     {Firstname:'Ndobo',Lastname:'Paulien Thomas',Dateofbirth:'01/07/2004',Course:'GIT',Status:'Student',id:'2'},
//     {Firstname:'Ndobo',Lastname:'Paulin Thomas',Dateofbirth:'01/07/2004',Course:'GIT',Status:'Student',id:'3'}
//    ]
)
useEffect(() => {
    fetch('http://localhost:7000/users')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        setUsers(data)

    })
    console.log('ok')
    console.log(users)
   
});





    return (  
                <div className="Profile">

                     {/* {blogs && <Bloglist blogs={blogs.filter((blog) => blog.author ==='Josiane')} title='Now Reading ' supervisor={'Maka Maka'}/> }  */}
                    {users && users.filter(users => users.id === '1').map((users)=>(

                        <div className="userprofile bg-primary" key={users.id}>
                           <div className="profilemaincontainer">
                           <div className="userpicture">
                                <button className="changepicture">{users.imageUrl}</button>
                                <button className="deletepicture"></button>
                            </div> 
                            <div className="row mb-3">
                                <label htmlFor="colFormLabelSm" className="col-sm-4 col-form-label col-form-label-sm">First Name</label>
                                 <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder={users.Firstname}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="colFormLabelSm" className="col-sm-4 col-form-label col-form-label-sm">Last Name</label>
                                 <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder={users.Lastname}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="colFormLabelSm" className="col-sm-4 col-form-label col-form-label-sm">Course</label>
                                 <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder={users.Course}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="colFormLabelSm" className="col-sm-4 col-form-label col-form-label-sm">Status</label>
                                 <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="colFormLabelSm" placeholder={users.Status}/>
                                </div>
                            </div>
                           </div>
                            
                            

                        </div>

                    ))}
                </div>
    );
}
 
export default Profile;