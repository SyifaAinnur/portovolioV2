import React from 'react'

const Services = () => {
      // context
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            {/* dark mode */}
            {/* <span style={{ color: darkMode ? "white" : " "}}>My Awesome</span> */}
            <span>My Awesome</span>
            <span>services</span>
            <span>
                Lorem ipsum.......
                <br/>
                Lorem ipsum.......
            </span>
            <a href='#' download>
                <button className="button s-button">Download</button>
            </a>
            <div className="blur s-blur1"></div>
        </div>
    </div>
  )
}

export default Services