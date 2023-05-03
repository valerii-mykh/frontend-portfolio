import "./style.css";
import gitHubIcon from "../../img/icons/gitHub-black.svg";

const BtnGitHub = ({ gitHubLink }) => {
  return (
    <a
      href={gitHubLink}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
