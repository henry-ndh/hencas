interface RoundedIconProps {
    icon: React.ReactNode;
    roundedColor?: boolean;
    link?: string;
}

const RoundedIcon = (props: RoundedIconProps) => {
    return (
        <a href={props.link} target="_blank" className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-colorText  cursor-pointer">
            {props.icon}
        </a>
    );
};

export default RoundedIcon;
