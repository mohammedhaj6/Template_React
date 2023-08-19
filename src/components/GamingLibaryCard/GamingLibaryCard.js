import "./GamingLibaryCard.css";
import { SecondaryButton } from "../../components/index";

const GamingLibaryCard = (props) => {
  return (
    <div className="gaming-libary-card">
      <ul>
        <li  className="gaming-libary-item-image">
          <img
           
            src={props.image}
            alt=""
          ></img>
        </li>
        <li>
          <h4>{props.title}</h4>
          <span>{props.category}</span>
        </li>
        <li>
          <h4> Date Added </h4>
          <span>{props.date_added}</span>
        </li>
        <li>
          <h4>Hours Played </h4>
          <span>{props.hoursPlayed}</span>
        </li>
        <li>
          <h4>Currently </h4>
          <span>{props.downloaded}</span>
        </li>
        <SecondaryButton>Download</SecondaryButton>
      </ul>
    </div>
  );
};

export default GamingLibaryCard;
