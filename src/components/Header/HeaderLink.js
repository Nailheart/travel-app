import { Link } from "react-router-dom";

function HeaderLink(props) {
  const { 
    linkClassName,
    linkHref,
    linkTitle,
    svgClassName,
    svgWidth = "24",
    svgHeight = "24",
    svgFill = "currentColor",
    svgIconName
  } = props;

  // TODO: need svg sprite
  return (
    <Link className={linkClassName} to={linkHref}>
      <span className="visually-hidden">{linkTitle}</span>
      <svg className={svgClassName} width={svgWidth} height={svgHeight} fill={svgFill} xmlns="http://www.w3.org/2000/svg">
        <use href={`img/sprite.svg#${svgIconName}`}></use>
      </svg>
    </Link>
  );
}

export default HeaderLink;