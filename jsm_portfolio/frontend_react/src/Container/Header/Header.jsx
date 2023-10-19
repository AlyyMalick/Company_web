// import React from "react";
// import "./Header.scss";
// const Header = () => {
//   return <div>Header</div>;
// };

// export default Header;


// import React from "react";
// import { images } from "../../Constants";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <div className="hero-section">
//       <div className="hero-content">
//         <h1 className="hero-heading">
//           Transform Your Business
//           <br />
//           With Cutting-Edge Software
//         </h1>
//         <p className="hero-subheading">
//           Boost productivity and efficiency with our innovative software solutions. Let us take your business to the next level.
//         </p>
//         <img src={images.profile} alt="profile"> 
//       </div>
//     </div>
//   );
// };

// export default Header;




// Header.jsx
import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="app__header">
      <div className="app__header-content">
        <h1>Transform Your Business <br />
            With Cutting-Edge
            Software</h1>
        <h3>boost productivity and efficiency with our
             innovative <br />  software solutions. Let us
              take  your <br /> business to the next level</h3>
      </div>
    </header>
  );
};

export default Header;

