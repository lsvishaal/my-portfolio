import './ProfilePic.css'; 
import PropTypes from 'prop-types';
const ProfilePic = ({ src, alt }) => {
  return (
    <div className="profile-pic-container box">
      <img src={src} alt={alt} className="profile-pic" />
    </div>
  );
};

ProfilePic.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ProfilePic;