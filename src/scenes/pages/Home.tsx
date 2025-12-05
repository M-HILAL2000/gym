import { SelectedPage } from "../../types/types";
// import useMediaQuery from "../hooks/useMediaQuey";
// import { useState } from "react";
// import ActionButton from "../Shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import ActionButton from '../../ui/ActionButton';
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuey";
import {motion} from 'framer-motion';
interface Iprops {
  setSelectedPage: (value: SelectedPage) => void;
}
const HomePage = ({ setSelectedPage }: Iprops) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 "
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER  */}
        <div className="z-10 mt-32 md:basis-3/5 ">
          {/* HEADINGS  */}
          <motion.div 
          className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5}}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          >
            <div className="relative">
              <div className=" before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-[url(/src/assets/EvolveText.png)] ">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              mollitia laudantium quibusdam itaque at omnis molestiae? Animi
              modi amet odit.
            </p>
          </motion.div>
          {/* ACTIONS  */}
          <motion.div 
          className="mt-8 flex items-center gap-8 md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2,  duration: 0.5}}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink 
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
          {/* IMAGE  */}
        <div className="flex basis-2/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img className="w-140 h-140" alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/* SPONSORS  */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 md:z-20">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 ">
              <img src={SponsorRedBull} alt="redbul-sponsor"/>
              <img src={SponsorFortune} alt="Fortune-sponsor"/>
              <img src={SponsorForbes} alt="Forbes-sponsor"/>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePage;
