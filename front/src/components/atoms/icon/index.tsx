import library, { LibsType } from "./library";
import { FaQuestion } from "react-icons/fa";
import { memo, MouseEvent } from "react";

export interface IconType {
  name: string;
  library: string;
}

interface IconsProps {
  value?: IconType;
  className?: string;
  onClick?: (event?: MouseEvent) => void;
}

const Index = ({ value, className, onClick }: IconsProps) => {
  const props = {
    onClick: (event: MouseEvent) => onClick && onClick(event),
    className,
  };

  if (!value || !value.name || !value.library) return <FaQuestion {...props} />;

  try {
    const repository: LibsType = library[value.library];
    const RequiredIcon = repository[value.name];
    if (!RequiredIcon) return <FaQuestion {...props} />;

    return <RequiredIcon {...props} />;
  } catch {
    return <FaQuestion {...props} />;
  }
};

export default memo(Index);
