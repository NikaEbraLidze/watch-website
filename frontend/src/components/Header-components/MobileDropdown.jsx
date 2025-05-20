import { Link } from 'react-router-dom';

export default function MobileDropdown(props) {
  return (
    <>
      <div className="D-C-row">
        <Link to={props.link}>{props.title}</Link>
        <button onClick={props.toggle}>&#9662;</button>
      </div>
      <div className={`dropdown-menu-mobile ${props.isOpen ? "show" : ""}`}>
        {props.items.map((item, index) => (
          <Link to={props.link} key={index}>{item}</Link>
        ))}
      </div>
    </>
  );
}