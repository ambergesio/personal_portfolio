import './style.scss';

const Item = ({ img, title, route, target }) => {

    return (
        <div className="nav_item">
            <img className="menu_svg" src={img} alt={title} title={title} />
            <a className="nav_link" href={route} target={target || null}>{title}</a>
        </div>
    )
}

export default Item;
