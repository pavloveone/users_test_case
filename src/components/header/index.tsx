import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { RootState } from "../../services/store";
import { setFilteredUsers } from "../../services/users.slice";
import { User } from "../../shared/types/users";

export const Header = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const { users } = useAppSelector((state: RootState) => state.users);
  const filteredUsers =
    users &&
    users.filter((user: User) => {
      return (
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.startsWith(search) ||
        user.dob?.date.includes(search) ||
        user.location?.city.toLowerCase().includes(search.toLowerCase()) ||
        user.location?.state.toLowerCase().includes(search.toLowerCase()) ||
        user.location?.country.toLowerCase().includes(search.toLowerCase())
      );
    });

  useEffect(() => {
    if (search) {
      dispatch(setFilteredUsers(filteredUsers));
    }
  }, [search]);
  return (
    <header className="flex justify-between items-center mx-8 mt-8 mb-6">
      <input
        className="bg-[#1E2027] text-[#CF7B5A] rounded-2xl w-[332px] py-3.5 px-6"
        value={search}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
        placeholder="search"
      />
      <p
        className="text-[#CF7B5A] cursor-pointer"
        onClick={() => window.location.reload()}
      >
        Refresh Users
      </p>
    </header>
  );
};
