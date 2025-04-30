import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <div className="user-container">
        <UserCard
          name="Jhon Smith"
          role="Pengembang Web"
          avatarUrl="https://randomuser.me/api/portraits/men/45.jpg"
        />
        <UserCard
          name="Jane Doe"
          role="Desainer UI"
          avatarUrl="https://randomuser.me/api/portraits/women/65.jpg"
        />
      </div>
    </div>
  );
}

export default App;
