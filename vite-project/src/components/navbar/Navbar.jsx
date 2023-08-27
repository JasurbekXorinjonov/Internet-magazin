import { Container, Input, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ariaLabel = { "aria-label": "description" };

function Navbar() {
  return (
    <Container>
      <Stack direction={"row"} spacing={6} style={{ padding: "15px", alignItems: "center" }}>
        <Typography>Home</Typography>
        <Typography>Clothers</Typography>
        <Typography>Shoes</Typography>
        <Typography>Accessories</Typography>
        <Typography style={{ marginLeft: "100px" }}>SHOPPING</Typography>
        <Input inputProps={ariaLabel} placeholder="Search..." />
        <SearchIcon />
        <PersonIcon />
        <ShoppingCartIcon />
        <FavoriteIcon />
      </Stack>
    </Container>
  );
}

export default Navbar;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import "./navbar.css";
// import {
//   faCartShopping,
//   faHeart,
//   faMagnifyingGlass,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";

// function Navbar() {
//   return (
//     <div className="container">
//       <ul className="flex">
//         <li>
//           <a href="#">Home</a>
//         </li>
//         <li>
//           <a href="#">Clothers</a>
//         </li>
//         <li>
//           <a href="#">Shoes</a>
//         </li>
//         <li>
//           <a href="#">Accessories</a>
//         </li>
//       </ul>
//       <h1 className="logo">Shopping</h1>
//       <input type="text" placeholder="Search..." className="search-input" />
//       <div className="icons">
//         <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#000000" }} />
//         <FontAwesomeIcon icon={faUser} size="lg" style={{ color: "#000000", marginLeft: "15px" }} />
//         <FontAwesomeIcon
//           icon={faCartShopping}
//           size="lg"
//           style={{ color: "#000000", marginLeft: "15px" }}
//         />
//         <FontAwesomeIcon
//           icon={faHeart}
//           size="lg"
//           style={{ color: "#000000", marginLeft: "15px" }}
//         />
//       </div>
//     </div>
//   );
// }

// export default Navbar;
