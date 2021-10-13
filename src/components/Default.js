import React from "react";



const Default = props =>{
        console.log(props);

return(
       <div className="container">
               <div className="row">
                       <div className="col-10 mx-auto text-center text-title text-uppercase py-5">

                            <h1 className="display-3"> 404 </h1>
                            <h1>Error</h1>
                            <h1>Page {`"`}{props.location.pathname}{`"`}  not found</h1>   
                       </div>
               </div>
       </div>
);
}

export default Default;