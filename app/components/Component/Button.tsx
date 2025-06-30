import { IconType } from "react-icons";

interface CustomButtonProps {
  title: string;
  icon?: React.ReactElement<IconType>;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, icon }) => {
  return (
    <button className="flex items-center gap-2 border border-black px-4 py-2 rounded-full">
      {icon && (
        <span className="border rounded-full p-2">
          {icon}
        </span>
      )}
      {title}
    </button>
  );
};

export default CustomButton;