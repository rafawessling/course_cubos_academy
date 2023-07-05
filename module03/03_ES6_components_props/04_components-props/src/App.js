import './App.css';
import UserCard from './components/UserCard/index';
import Avatar from './components/Avatar/index';
import Profile1 from './assets/profile1.jpeg';
import Profile2 from './assets/profile2.png';
import Profile3 from './assets/profile3.png';
import Profile4 from './assets/profile4.png';

const users = [
    {
        id: 1,
        name: 'Rafaela Wessling Oening',
        image: Profile1,
        jobRole: 'Software Developer Fullstack',
        following: true,
        color: '#ff00ff',
        verify: true,
    },
    {
        id: 2,
        name: 'Joana da Silva',
        image: Profile2,
        jobRole: 'UI/UX Designer',
        following: false,
        color: '#c45c',
        verify: true,
    },
    {
        id: 3,
        name: 'João Silveira Junior',
        image: Profile3,
        jobRole: 'Software Developer Backend',
        following: true,
        color: '#45c',
        verify: false,
    },
    {
        id: 4,
        name: 'Pedro Xavier Reis',
        image: Profile4,
        jobRole: 'Data Analyst',
        following: false,
        color: '#98ce',
        verify: true,
    },
];

function App() {
    return (
        <div className="container">
            {users.map(user => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    jobRole={user.jobRole}
                    following={user.following}
                    verify={user.verify}
                >
                    <Avatar image={user.image} color={user.color} />
                </UserCard>
            ))}
        </div>
    );
}

export default App;
