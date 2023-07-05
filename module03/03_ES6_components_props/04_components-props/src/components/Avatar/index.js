import './style.css';

export default function Avatar({ image, color }) {
    return <div className="avatar-img" style={{ backgroundImage: `url(${image})`, border: `3px solid ${color}` }} />;
}
