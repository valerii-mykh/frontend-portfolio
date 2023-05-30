import './style.css';
import livePageIcon from '../../img/icons/web-page.svg';

const BtnLivePage = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={livePageIcon} alt="" />
      Live Page
    </a>
  );
};

export default BtnLivePage;
