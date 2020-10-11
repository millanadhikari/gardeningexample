import React from 'react'
import './Header.css'

function Header() {
    return (
        //Bam naming convention
        <div className="header">
            
                <img src="https://gardeningsydney.com.au/wp-content/uploads/2020/01/admin-ajax.png" alt=""/>
            
            <div className = "header__menu">
                <ul>
                    <li>Home</li>
                    <li>About Gardening Sydney</li>
                    <li>Our Services</li>
                    <li>Contact Us</li>
                                        
                </ul>
            </div>
            <div className = "header__contact">
                <p>PH: 04545454545</p>
            </div>
        </div>
    )
}

export default Header
