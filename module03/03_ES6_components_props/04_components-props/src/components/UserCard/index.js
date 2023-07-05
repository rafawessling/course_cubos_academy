import './style.css';
import BadgeVerify from '../../assets/secure.png';

export default function UserCard({ name, jobRole, children, following, verify }) {
    return (
        <div className="user-card">
            {verify && <img className="badge-secure" src={BadgeVerify} alt="Verify" />}

            {children}
            <strong>{name}</strong>
            <span>{jobRole}</span>
            {
                <button className={`button-card ${following ? 'following' : 'unfollowing'}`}>
                    {following ? 'Connected' : 'Connect'}
                </button>
            }
        </div>
    );
}
