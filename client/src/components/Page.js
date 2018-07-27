// import React, { Component } from "react";
// import Navbar from "./Navbar";

// import Current from "./Current/Current.js";
// import QR from "./QR/QR.js";
// import History from "./History/History.js";
// // import Signup from "./Signup/Signup.js";
// // import Login from "./Login/Login.js";
// // import Logout from "./Logout.js";

// class Page extends Component {
//   state = {
//     currentPage: "Home",
//   };

//   handlePageChange = page => {
//     this.setState({ currentPage: page });
//   };

//   render() {
//     var page;
//     // var active = "nav-links"
//     if(this.state.currentPage === "About") {
      
//       page = <About />
//     }
//     else if (this.state.currentPage === "Blog") {
//       page =<Blog />
//     }
//     else if (this.state.currentPage === "Contact") {
//       page =<Contact />
//     }
//     else if (this.state.currentPage === "Home") {
//       page =<Home />
//     }

//     return (
//       <div>
//         <Navbar
//           currentPage={this.state.currentPage}
//           handlePageChange={this.handlePageChange}
//         />
//         {page}
//       </div>
//     );
//   }
// }

// export default Page;
