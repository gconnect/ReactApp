  import React, {Component} from 'react'
  import '../css/styles.css'


  const Header = (props) =>{
        return (
            <header>
                <div>
                <div className="logo">Logo</div>
                <input type = "text" onChange = {props.keyword}/>
                </div>
                </header>
          )
  }

  export default Header;
