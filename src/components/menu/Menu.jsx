import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const menuItems = [
    { id: "intro", name: "home" },
    "portfolio",
    "works",
    "testimonials",
    "contact",
  ];

  const capFirstLetter = (word) => {
    const wrd = word.id ? word.name : word;
    return wrd.charAt(0).toUpperCase() + wrd.slice(1);
  };

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {menuItems.map((item) => {
          return (
            <li onClick={() => setMenuOpen(false)}>
              <a href={item.id ? `#${item.id}` : `#${item}`}>
                {capFirstLetter(item)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
