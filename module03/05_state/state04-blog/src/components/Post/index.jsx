import './style.css';

function Post({ post }) {
    return (
        <div className="container-post">
            <h2 className="title">{post.title}</h2>
            <p className="text">{post.text}</p>
            <p>
                <a href="#top">Read more</a>
            </p>
        </div>
    );
}

export default Post;
