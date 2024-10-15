import { FaHome,  FaHotel, FaAngleRight, FaMinus   } from "react-icons/fa";

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
        icon: FaMinus,
      },
      {
        name: "Remove shelter",
        path: "/create-shelter",
        icon: FaMinus,
      }
    ],
  },
];

export default menuItems