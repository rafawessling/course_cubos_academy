import { useState } from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Modal from '../../components/Modal';
import './style.css';

const Main = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'Post 1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus provident in ratione odio repudiandae nihil maiores, rerum harum doloribus consequatur molestias, obcaecati hic quas nostrum enim eligendi, dolorum nulla! Nemo maiores magni aspernatur quae exercitationem facilis amet, culpa maxime.',
        },
        {
            id: 2,
            title: 'Post 2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus provident in ratione odio repudiandae nihil maiores, rerum harum doloribus consequatur molestias, obcaecati hic quas nostrum enim eligendi, dolorum nulla! Nemo maiores magni aspernatur quae exercitationem facilis amet, culpa maxime.',
        },
        {
            id: 3,
            title: 'Post 3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus provident in ratione odio repudiandae nihil maiores, rerum harum doloribus consequatur molestias, obcaecati hic quas nostrum enim eligendi, dolorum nulla! Nemo maiores magni aspernatur quae exercitationem facilis amet, culpa maxime.',
        },
        {
            id: 4,
            title: 'Post 4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea temporibus provident in ratione odio repudiandae nihil maiores, rerum harum doloribus consequatur molestias, obcaecati hic quas nostrum enim eligendi, dolorum nulla! Nemo maiores magni aspernatur quae exercitationem facilis amet, culpa maxime.',
        },
    ]);

    const [modalOpen, setModalOpen] = useState(false);

    function handleToggleModal() {
        setModalOpen(!modalOpen);
    }

    return (
        <div className="container">
            <Header handleToggleModal={handleToggleModal} />

            <div className="container-posts">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>

            <Modal handleToggleModal={handleToggleModal} modalOpen={modalOpen} setPosts={setPosts} posts={posts} />
        </div>
    );
};

export default Main;
