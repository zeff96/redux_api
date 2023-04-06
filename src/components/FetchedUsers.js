import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsersAsync } from "../store/users/usersSlice";

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else if (error) {
    return <h3>{error}</h3>;
  }

  const fetchedUsers = users.map((user) => (
    <li key={user.login.uuid}>
      <p>{user.name.first}</p>
      <p>{user.name.last}</p>
    </li>
  ));

  return <ul>{fetchedUsers}</ul>;
};

export default FetchedUsers;
