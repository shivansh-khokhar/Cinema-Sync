import { Link } from "react-router-dom";

const LINKS = [
 
  {
    to: "/",
    data: "Home",
  },
  {
    to: "/starred",
    data:"Starred"
  },
];
export default function nav() {
  return (
    <div>
      <ul>
        {LINKS.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.data}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
