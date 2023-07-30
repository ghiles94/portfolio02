import Link from "next/link";

function Navbar() {
  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/projets",
      title: "Projets",
    },
    {
      to: "/temoignages",
      title: "Témoignages",
    },
  ];
  return (
    <div className="navBar">
      <div className="navBarContent">
        <h1>
          <Link href="/" className="navBarTitle">
            H.Ghiles
          </Link>
        </h1>
        <ul className="navBarLinks">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.to} className="navBarLink">
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="navBarLink">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
