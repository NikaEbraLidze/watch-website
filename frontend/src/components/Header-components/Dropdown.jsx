import { Link } from 'react-router-dom';

export default function Dropdown(props) {
  return (
    <div className="dropdown">
      <Link to={props.link}>{props.title}</Link>
      <div className="dropdown-menu">
        {props.items.map((item, index) => (
          <Link to={props.link} key={index}>{item}</Link>
        ))}
      </div>
    </div>
  );
}
