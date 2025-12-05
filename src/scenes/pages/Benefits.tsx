import { SelectedPage} from "../../types/types";
import { motion } from "framer-motion";
import HText from "../../ui/HText";
import { GraduationCap, House, Users } from "lucide-react";
import ActionButton from "../../ui/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import type { BenefitType } from "../../types/types";
import BenefitsUi from "../../ui/Benefit";


const benefits: Array<BenefitType> = [
  {
    icon: <House />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate corporis iste impedit.",
  },
  {
    icon: <Users />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate corporis iste impedit.",
  },
  {
    icon: <GraduationCap />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate corporis iste impedit.",
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
interface Iprops {
  setSelectedPage: (value: SelectedPage) => void;
}
const Benefits = ({ setSelectedPage }: Iprops) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 pt-30">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        <motion.div
          className="md:my-5 md:w-3/5 lg:w-3/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            cupiditate corporis iste impedit. Soluta expedita sunt voluptate
            dolorem accusamus rem.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitsUi
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION  */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img 
          className="mx-auto rounded-4xl mt-16 z-10"
          src={BenefitsPageGraphic} 
          alt="Benefits-Page-Graphic" />
          <div className="mt-10">
            <div className="relative">
              <motion.div 
              className="before:absolute before:-top-20 before:-left-20 before:z-[-2] md:before:content-[url(/src/assets/AbstractWaves.png)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              >
                <HText>
                  MILLIONS OF HAPPY MEMBERS GETTING
                  <span className="text-primary-500"> FIT.</span>
                </HText>
              </motion.div>
            </div>
            {/* DESCRIPTION  */}
            <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{delay: 0.2, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: 50 },
               visible: { opacity: 1, x: 0 },
             }}
            >
            <p className="my-5 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque officia esse error maxime velit aliquid non, blanditiis
              inventore nesciunt excepturi adipisci rerum? Reprehenderit
              quisquam facere id tenetur qui iure labore tempora, sequi eaque,
              veritatis veniam accusamus dolor blanditiis. Iste, porro!
            </p>
            <p className="my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque officia esse error maxime velit aliquid non, blanditiis
              inventore nesciunt excepturi adipisci rerum? Reprehenderit
              quisquam facere id tenetur qui iure labore tempora, sequi eaque,
              veritatis veniam accusamus dolor blanditiis. Iste, porro!</p>
            </motion.div>
            {/* BUTTON  */}
            <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] md:before:content-[url(/src/assets/Sparkles.png)]">
              <ActionButton setSelectedPage={setSelectedPage}>
                 Join Now
              </ActionButton>
            </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
