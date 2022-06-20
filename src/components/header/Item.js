import { Link } from 'react-router-dom';

const Item = ({ img, title, route }) => {
    return (
        <div className="nav_item">
            <img className="menu_svg" src={img} alt={title} title={title} />
            <Link className="nav_link" to={route} rel="noreferrer">{title}</Link>
        </div>
    )
}

export default Item;
