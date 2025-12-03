import AnchorLink from "react-anchor-link-smooth-scroll";
import type { ReactNode } from "react";
import { SelectedPage } from "../types/types";
interface Iprops {
children: ReactNode;
setSelectedPage: (value: SelectedPage) => void;
}
const ActionButton = ({children, setSelectedPage}: Iprops) => {
  return (
   <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
   >
    {children}
   </AnchorLink>
  )
}

export default ActionButton;