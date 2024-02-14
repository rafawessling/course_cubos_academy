import './Avatar.css';

type Props = {
    image: string;
    size?: number;
};

function Avatar({ image, size }: Props) {
    const sizeAvatar = size || 147;

    return (
        <img
            src={image}
            alt="avatar"
            className="avatar"
            style={{ width: `${sizeAvatar}px`, height: `${sizeAvatar}px` }}
        />
    );
}

export default Avatar;
