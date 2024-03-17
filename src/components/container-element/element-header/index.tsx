import { IElementHeader } from "./types";

export const ElementHeader = (props: IElementHeader) => {
  const { image, name, email, isActive } = props;

  return (
    <header className="flex items-center gap-x-4 pb-[18px]">
      <img
        src={image}
        alt=""
        width={56}
        height={56}
        className="rounded-full opacity-80"
      />
      <div className="truncate">
        <h3
          className={`font-semibold ${
            isActive ? "text-[#CF7B5A]" : "text-[#DCD8D3]"
          } text-xl truncate`}
        >
          {name}
        </h3>
        <span className="font-medium text-[#DCD8D3] text-sm truncate">
          {email}
        </span>
      </div>
    </header>
  );
};
