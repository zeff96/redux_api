import { useSelector } from "react-redux";

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  if (isLoading) {
    return <h3>Loading...</h3>;
  } else if (error) {
    return <h3>{error}</h3>;
  }

  const fetchedUsers = users.map((user) => (
    <li key={users.id}>
      <p>{user.first}</p>
      <p>{user.last}</p>
    </li>
  ));

  return (
    <ul>
      <fetchedUsers />
    </ul>
  );
};

export default FetchedUsers;
