import './UserCard.css';

type UserCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
};

const UserCard = ({ name, role, avatarUrl }: UserCardProps) => {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={`${name}'s Avatar`} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default UserCard;