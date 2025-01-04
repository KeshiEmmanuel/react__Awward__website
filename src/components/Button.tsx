import { IconBaseProps, IconType } from "react-icons";

interface Props {
    id: string;
    title: string;
    containerClass: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
const Button = ({ id, title, containerClass, leftIcon, rightIcon }: Props) => {
    return (
        <button
            id={id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden px-7 py-3 rounded-full ${containerClass}`}
        >
            {leftIcon && leftIcon}
            <span className="uppercase font-general relative inline-flex overflow-hidden text-xs">
                <div>{title}</div>
            </span>
            {rightIcon}
        </button>
    );
};

export default Button;
