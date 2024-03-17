import { IAsideField } from "./types";

export const AsideField = (props: IAsideField) => {
  const { title, count } = props;
  return (
    <li className="text-[#8C8988] text-medium text-xs grid grid-cols-[50px_1fr] gap-x-4">
      {title}
      <span className="text-[#DCD8D3] text-sm">{count} users</span>
    </li>
  );
};
