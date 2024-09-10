import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuHeader } from '@based/data/Data';

const HeaderNav = () => {
    const path = window.location.pathname;
    return (
        <nav className="hidden items-center gap-6 text-sm  font-medium md:flex">
            {MenuHeader.map((item) => (
                <Link to={item.link} className="">
                    <ItemHeader key={item.name} className={`flex items-center gap-4 py-1.5 ${path == item.link ? `text-colorText` : ``}`}>
                        {item.name}
                    </ItemHeader>
                </Link>
            ))}
            {/* <ModeToggle /> */}
            <button
                className="px-4 py-2 text-[12px] w-[100px] text-black font-medium  bg-colorText rounded-[50px] cursor-pointer
          hover:bg-[#13e28d] transition-all duration-300 ease-in-out
        "
            >
                <a href="/">Hire me</a>
            </button>
        </nav>
    );
};

export default HeaderNav;

export const ItemHeader = styled.div`
    position: relative;
    display: inline-block;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: var(--color-text);
        transform: translateX(-50%);
    }

    &:hover {
        color: var(--color-text);
    }

    &:hover::before {
        width: 100%;
        left: 0;
        transform: translateX(0);
        transition: width 0.5s ease, left 0.5s ease;
    }
`;
