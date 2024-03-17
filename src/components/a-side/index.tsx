import { User } from "../../shared/types/users";
import { HorizontalLine } from "../horizontal-line/index";
import { AsideField } from "./a-side-field/index";
import { IAside } from "./types";

export const Aside = (props: IAside) => {
  const { users } = props;
  const groupedUsers = {
    "11-20": [] as User[],
    "21-30": [] as User[],
    "31-40": [] as User[],
    "41-50": [] as User[],
    "51+": [] as User[],
  };

  users?.forEach((user) => {
    if (user.dob.age >= 11 && user.dob.age <= 20) {
      groupedUsers["11-20"].push(user);
    } else if (user.dob.age >= 21 && user.dob.age <= 30) {
      groupedUsers["21-30"].push(user);
    } else if (user.dob.age >= 31 && user.dob.age <= 40) {
      groupedUsers["31-40"].push(user);
    } else if (user.dob.age >= 41 && user.dob.age <= 50) {
      groupedUsers["41-50"].push(user);
    } else {
      groupedUsers["51+"].push(user);
    }
  });
  const maleUsers = users?.filter((user) => user.gender === "male");
  const femaleUsers = users?.filter((user) => user.gender === "female");

  return (
    <aside className="flex flex-col w-[332px] ml-4 pb-8 bg-[#1E2027] p-6">
      <header className="text-[#DCD8D3] text-semibold text-xl">
        {users?.length} Users
      </header>
      <HorizontalLine />
      <div>
        <h3 className="text-[#DCD8D3] text-semibold text-base pb-4">
          Age Groups
        </h3>
        <ul className="flex flex-col gap-3">
          <AsideField title="11 to 20" count={groupedUsers["11-20"].length} />
          <AsideField title="21 to 30" count={groupedUsers["21-30"].length} />
          <AsideField title="31 to 40" count={groupedUsers["31-40"].length} />
          <AsideField title="41 to 50" count={groupedUsers["41-50"].length} />
          <AsideField title="51+" count={groupedUsers["51+"].length} />
        </ul>
      </div>
      <HorizontalLine />
      <div>
        <h3 className="text-[#DCD8D3] text-semibold text-base pb-4">
          Gender Groups
        </h3>
        <ul className="flex flex-col gap-3">
          <AsideField title="Male" count={maleUsers?.length} />
          <AsideField title="Female" count={femaleUsers?.length} />
        </ul>
      </div>
    </aside>
  );
};
