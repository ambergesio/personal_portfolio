import './hamb.scss';

const Hitem = ({ img, title, route }) => {

    return (
        <div className="hnav_item">
            <img className="hmenu_svg" src={img} alt={title} title={title} />
            <a className="hnav_link" href={route}>{title}</a>
        </div>
    )
}

export default Hitem;
