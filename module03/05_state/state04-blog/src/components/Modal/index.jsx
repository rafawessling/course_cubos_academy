import './style.css';
import { useState } from 'react';

function Modal({ handleToggleModal, modalOpen, setPosts, posts }) {
    const [input, setInput] = useState('');

    const [textArea, setTextArea] = useState('');

    function handleAddNewPost() {
        if (!input || !textArea) {
            return;
        }

        const newPost = {
            id: posts[posts.length - 1].id + 1,
            title: input,
            text: textArea,
        };

        setPosts([...posts, newPost]);

        setInput('');
        setTextArea('');

        handleToggleModal();
    }

    return (
        <>
            {modalOpen && (
                <div className="backdrop">
                    <div className="modal">
                        <h2>Create post</h2>
                        <input
                            type="text"
                            placeholder="Title"
                            value={input}
                            onChange={event => setInput(event.target.value)}
                        />
                        <textarea
                            placeholder="Text"
                            value={textArea}
                            onChange={event => setTextArea(event.target.value)}
                        />

                        <button className="btn-primary" onClick={handleAddNewPost}>
                            Register new post
                        </button>
                        <button className="btn-secondary" onClick={handleToggleModal}>
                            Close register
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
