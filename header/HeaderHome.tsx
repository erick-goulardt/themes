import { Link } from "react-router-dom";

export const HeaderHome = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/sala">Sala</Link>
          </li>
          <li>
            <Link to="/quarto">Quarto</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

