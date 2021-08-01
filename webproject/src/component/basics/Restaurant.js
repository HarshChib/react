import React , { useState } from 'react'
import "./style.css"
import Menu from "./api.js"
import MenuCard from './Menucard'
const Restaurant = () => {
  const[menuData, setMenuData]=useState(Menu);
  
  const breakfast=(currentbutton)=>{
    const updatedlist=Menu.filter((curElem)=>{
        return curElem.category===currentbutton;
    })
    setMenuData(updatedlist);
  };
  const lunch=(currentbutton)=>{
    const updatedlist=Menu.filter((curElem)=>{
        return curElem.category===currentbutton;
    })
    setMenuData(updatedlist);
  };
  const snacks=(currentbutton)=>{
    const updatedlist=Menu.filter((curElem)=>{
        return curElem.category===currentbutton;
    })
    setMenuData(updatedlist);
  };
  const dinner=(currentbutton)=>{
    const updatedlist=Menu.filter((curElem)=>{
        return curElem.category===currentbutton;
    })
    setMenuData(updatedlist);
  };
  const All=()=>{
    
    setMenuData(Menu);
  };
    return (
        <>
            <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=> breakfast("breakfast")}>Breakfast</button>
                <button className="btn-group__item" onClick={()=> lunch("lunch")}>lunch</button>
                <button className="btn-group__item" onClick={()=> snacks("evening")}>snacks</button>
                <button className="btn-group__item" onClick={()=> dinner("dinner")}>dinner</button>
                <button className="btn-group__item" onClick={()=> All()}>all</button>

            </div>
            </nav>
           <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant;
