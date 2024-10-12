import { FaHome, FaHotel, FaAngleRight } from "react-icons/fa";

const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: FaHome,
    children: [],
  },
  {
    name: "Shelters",
    path: "/shelters",
    icon: FaHotel,
    children: [
      {
        name: "Create shelter",
        path: "/create-shelter",
        icon: FaAngleRight,
      }
    ],
  },
];

export default menuItems