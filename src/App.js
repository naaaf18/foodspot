import React from "react";
import  ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";




const AppLayout= ()=>{
    return(
        <>
        <HeaderComponent/>
        
        <Body/>
        <Footer/>
        </>

    )
}
//const heading2 = React.createElement('h2',{id:'titles',key:"2"},'Heading 2');
//const container = React.createElement('div',{id:'container',},[heading,heading2 ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);