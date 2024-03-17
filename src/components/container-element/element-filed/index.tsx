import { IElementField } from "./types";

export const ElementField = (props: IElementField) => {
  const { field, content } = props;

  return (
    <div className="grid grid-cols-[57px_1fr] gap-x-4">
      <span className="text-[#8C8988] text-xs">{field}</span>
      <span className="text-[#DCD8D3] text-sm truncate">{content}</span>
    </div>
  );
};
