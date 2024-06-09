import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement( "div" , {id : "parent"} , 
   [ 
    React.createElement("div" , {id : "child"} ,
      [  React.createElement( "h1" , {} , "Hello React")  
        , React.createElement( "h1" , {} , "Hello React2")    ]                         
    ),
    React.createElement("div" , {id : "child2"} ,
        [  React.createElement( "h1" , {} , "Hello React")  
          , React.createElement( "h1" , {} , "Hello React2")    ]                         
    )
] ));