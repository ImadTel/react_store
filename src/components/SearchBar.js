import React from "react";



export default function SearchBar(props) {

  

    return(
        <div className="container  search-bar mt-3">
            <div className="row">
                <div className="col-10 col-md-6 my-auto ">

                    <ul className="d-flex align-items-center justify-content-start my-auto list" >
                        <li className=" mx-auto search-list-item"  >
                              All
                        </li>

                        <li className=" mx-auto search-list-item">
                             UltraPortable
                        </li>

                        <li className=" mx-auto search-list-item" >
                            Ultrabook
                        </li>

                        <li className="mx-auto  search-list-item">
                             Convertible
                        </li>

                    </ul>
                </div>
                <div className="col-10 col-md-5">
                    <div className="d-flex  align-items-center justify-content-between p-2">
                            <input className="form-control mr-1" placeholder="search for a specific" /> 
                             <button  className="btn btn-success btn-sm  px-2"> Filter  <span className="mx-1">    <i className="fas fa-search"/></span>   </button>
                    </div>
                </div>   
               
                <div className="col-2 col-md-1 my-auto justify-content-end  align-items-end d-flex"> <i className="fas fa-bars ml-2"></i> </div>
               
            </div>

               

            </div>

        
    )

}