import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div>Ghlies Hechache &copy; 2023</div>
        <div className="socialMedia">
          <Link href="https://www.linkedin.com/in/ghiles-hechache/">
            <FiLinkedin color="white" />
          </Link>
          <Link href="https://github.com/ghiles94">
            <FiGithub color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
