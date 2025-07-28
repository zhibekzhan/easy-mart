import { useSelector } from "react-redux";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <img src={user.avatar} alt={user.name} width={80} />
      <h2>{user.name}</h2>
      <p>Status: {user.status}</p>
      <p>Points: {user.points}</p>
    </div>
  );
};

export default ProfilePage;
