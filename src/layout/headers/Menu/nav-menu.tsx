import React from "react";
import Link from "next/link";
import menu_data from './menu-data';
import Image from "next/image";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i}  className={`${item.id === 1 ? "has-dropdown has-mega-menu" : ""} ${item.id === 2 ? "has-dropdown has-mega-menu" : ""} ${item.id === 3 ? "has-dropdown has-mega-menu" : ""} ${item.id === 4 ? "has-dropdown has-mega-menu" : ""} `}>
            <Link href={item.link}>{item.title}</Link>
            {item.id === 1 &&
              <ul className="tp-submenu submenu mega-menu mega-menu1 mega-menu-container">
              {item.sub_menus?.map((mega_item, mega_index)  => 
                <li key={mega_index}>
                    <ul>
                      {mega_item.layout?.map((m_inner_item, m_i_index)  => 
                        <li key={m_i_index}><Link href={m_inner_item.link}>{m_inner_item.title}</Link></li>    
                      )}
                    </ul>
                </li>                   
              
              )} 
            </ul>  
            }
            
            {item.id === 2 &&   
               <ul className="tp-submenu submenu mega-menu mega-menu1 mega-menu-container">
               {item.sub_menus?.map((mega_item, mega_index)  => 
                 <li key={mega_index}>
                     <ul>
                       {mega_item.layout?.map((m_inner_item, m_i_index)  => 
                         <li key={m_i_index}><Link href={m_inner_item.link}>{m_inner_item.title}</Link></li>    
                       )}
                     </ul>
                 </li>                   
               
               )} 
             </ul>   
            }
            {item.id === 3 &&   
               <ul className="tp-submenu submenu mega-menu mega-menu1 mega-menu-container">
               {item.sub_menus?.map((mega_item, mega_index)  => 
                 <li key={mega_index}>
                     <ul>
                       {mega_item.layout?.map((m_inner_item, m_i_index)  => 
                         <li key={m_i_index}><Link href={m_inner_item.link}>{m_inner_item.title}</Link></li>    
                       )}
                     </ul>
                 </li>                   
               
               )} 
             </ul>   
            }
            {item.id === 4 &&   
               <ul className="tp-submenu submenu mega-menu mega-menu1 mega-menu-container">
               {item.sub_menus?.map((mega_item, mega_index)  => 
                 <li key={mega_index}>
                     <ul>
                       {mega_item.layout?.map((m_inner_item, m_i_index)  => 
                         <li key={m_i_index}><Link href={m_inner_item.link}>{m_inner_item.title}</Link></li>    
                       )}
                     </ul>
                 </li>                   
               
               )} 
             </ul>   
            }
            
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;

