import { Link } from "react-router-dom";

const LINKS = [
  {
    to: "/about",
    data: "About Page",
  },
  {
    to: "/contact",
    data: "contact page",
  },
  {
    to: "/",
    data: "Home page",
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
