import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const leftItems = [
    {
      Icon: Person,
      value: "+1 314-724-0837",
    },
    {
      Icon: Mail,
      value: "ivanrr308@gmail.com",
    },
  ];

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            cirr.
          </a>

          {leftItems.map((Item, i) => (
            <div className="itemContainer" key={i}>
              <Item.Icon className="icon" />
              <span> {Item.value} </span>
            </div>
          ))}
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
