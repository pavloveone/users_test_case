import { useEffect } from "react";
import "./App.css";
import { Container } from "../container/index";
import { Header } from "../header/index";
import { UsersServices } from "../../shared/services/users.services";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { RootState } from "../../services/store";
import { setUsers } from "../../services/users.slice";

function App() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state: RootState) => state.users);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await UsersServices.getAllUsers();
      dispatch(setUsers(users));
    };

    fetchUsers();
  }, []);
  return (
    <>
      <Header />
      {users?.length! > 0 ? (
        <Container />
      ) : (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-300 border-r-transparent"></div>
        </div>
      )}
    </>
  );
}

export default App;
