import './style.scss';

const Item = ({ img, title, route }) => {

    return (
        <div className="nav_item">
            <img className="menu_svg" src={img} alt={title} title={title} />
            <a className="nav_link" href={route}>{title}</a>
        </div>
    )
}

export default Item;
