import { useSelector } from "react-redux";

const FetchedUsers = () => {
  const { users, isLoading } = useSelector((state) => state.users);
  return <div>FetchedUsers</div>;
};

export default FetchedUsers;
