import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from '../../types/types';

interface Iprops {
page: string;
selectedPage: SelectedPage;
setSelectedPage: (value: SelectedPage) => void;
}
const Link = ({page, selectedPage, setSelectedPage}: Iprops) => {
const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
   <AnchorLink
   className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} hover:text-primary-300 transition duration-300`}
   href={`#${lowerCasePage}`}
   onClick={() => setSelectedPage(lowerCasePage)}
   >
    {page}
   </AnchorLink>
  )
}

export default Link;