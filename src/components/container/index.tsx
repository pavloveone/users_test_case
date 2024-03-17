import { Aside } from "../a-side/index";
import { ContainerElement } from "../container-element/index";
import { v4 as uuid } from "uuid";
import { User } from "../../shared/types/users";
import { useAppSelector } from "../../services/hooks";
import { RootState } from "../../services/store";

export const Container = () => {
  const { users, filteredUsers } = useAppSelector(
    (state: RootState) => state.users
  );
  const currentUsers = filteredUsers.length > 0 ? filteredUsers : users;
  return (
    <div className="grid grid-cols-[1fr_332px] p-8">
      <ul
        className="grid grid-rows-[max-content] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 overflow-y-auto overflow-x-hidden scrollbar"
        style={{ maxHeight: "calc(100vh - 108px)" }}
      >
        {currentUsers.map((user: User) => (
          <ContainerElement key={uuid()} user={user} />
        ))}
      </ul>
      <Aside users={users} />
    </div>
  );
};
