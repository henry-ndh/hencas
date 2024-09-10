import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet';
import { Details } from '@based/config/SVGIcon';
import { ItemHeader } from './HeaderNav';
import { Link } from 'react-router-dom';
import { MenuHeader } from '@based/data/Data';

const MobileNav = () => {
    const path = window.location.pathname;
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Details width="24px" height="24px" className="cursor-pointer md:hidden" />
            </SheetTrigger>
            <SheetContent className="w-[300px]">
                <div className="flex flex-col">
                    {MenuHeader.map((item) => (
                        <Link to={item.link} className="">
                            <ItemHeader key={item.name} className={`flex items-center gap-4 py-1.5 ${path == item.link ? `text-colorText` : ``}`}>
                                {item.name}
                            </ItemHeader>
                        </Link>
                    ))}
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
