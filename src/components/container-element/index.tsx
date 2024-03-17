import { convertDate, formatPhoneNumber } from "../../shared/helpers/helpers";
import { User } from "../../shared/types/users";
import { ElementField } from "./element-filed/index";
import { ElementHeader } from "./element-header/index";
import { IContainerElement } from "./types";
import RemoveIcon from "../../assets/remove_icons.svg";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import { deleteUser, setActiveElement } from "../../services/users.slice";
import { RootState } from "../../services/store";

export const ContainerElement = (props: IContainerElement) => {
  const { user } = props;
  const dispatch = useAppDispatch();
  const { activeElement } = useAppSelector((state: RootState) => state.users);
  const fullname =
    user?.name?.title + ". " + user?.name?.first + " " + user?.name?.last || "";
  const fullAddress = (location: User["location"]) => {
    return `${location.city}, ${location.state}, ${location.country}`;
  };
  const removeUser = (user: User) => {
    dispatch(deleteUser(user));
  };
  return (
    <li
      className={`flex flex-col p-5 bg-[#1A1C23] rounded-2xl cursor-pointer  relative ${
        activeElement === user
          ? "border border-[#CF7B5A33]"
          : "border border-[#1A1C23]"
      }`}
      onClick={() =>
        dispatch(setActiveElement(activeElement === user ? null : user))
      }
    >
      <ElementHeader
        image={user?.picture?.large}
        email={user?.email}
        name={fullname}
        isActive={activeElement === user}
      />
      <div className="grid gap-y-3">
        <ElementField
          field="Phone No"
          content={formatPhoneNumber(user?.phone)}
        />
        <ElementField field="Birthday" content={convertDate(user?.dob?.date)} />
        <ElementField field="Address" content={fullAddress(user.location)} />
      </div>
      {activeElement === user ? (
        <div
          className="flex justify-center items-center w-11 h-11 absolute top-0 right-0 top-0 border border-l-[#FF2C4733] border-b-[#FF2C4733] border-r-transparent border-t-transparent rounded-bl-lg"
          onClick={() => removeUser(user)}
        >
          <img src={RemoveIcon} width={24} height={24} alt="remove" />
        </div>
      ) : null}
    </li>
  );
};
