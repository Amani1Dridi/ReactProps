import React from 'react';
import './App.css';
import Profil from './profil/profil.js';
import ME from '../src/profil/me.jpg';
import Bio from './profil/component/bio';
function App() {


 

  return (
    <div class="container">
      <div class="centered-element">
       <div class="card p-4"> 
       <div class=" image img">
         <button class="btn btn-secondary"> 
         <img class="img" src={ME} height="100" width="100" />
         </button> 
         <span class="name"><Profil fullName="Amani Dridi" /></span> 
          <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
           <span class="number">1069 <span class="follow">Followers</span>
           </span>
            </div>
             <div class=" d-flex mt-2">
               <button class="btn1 btn-dark"> MY PROFILE : </button> </div> 
               <div class="text mt-3"> 
               <span><Bio/><br></br> 
               
                </span>
                 </div>
                   <div class=" px-2 rounded mt-4 date ">
                     <span class="join"> August,2022</span> 
                     </div>
                      </div>
                      </div>
                       </div>
</div>
  );
}

export default App;
