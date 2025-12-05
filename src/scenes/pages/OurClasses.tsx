import HText from "../../ui/HText";
import  { SelectedPage } from "../../types/types";
import type { ClassType } from "../../types/types";
import { motion } from 'framer-motion';
import image1 from  "@/assets/image1.png";
import image2 from  "@/assets/image2.png";
import image3 from "@/assets/Image3.png";
import image4 from  "@/assets/Image4.png";
import image5 from  "@/assets/Image5.png";
import image6 from  "@/assets/Image6.png";
import ClassImages from "../../ui/ClassImages";

interface Iprops {
setSelectedPage: (value: SelectedPage) => void;
}
const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
    image: image1,
  },
  {
    name: "Training Classes",
    image: image2,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
    image: image3,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
    image: image4,
  },
  {
    name: "Adventure Classes",
    image: image5,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",  
    image: image6,
  }
]
const OurClasses = ({setSelectedPage}: Iprops) => {
  return (
   <section id="ourclasses" className="mx-auto  bg-gray-20 min-h-full  pt-30">
    <motion.div 
    className="w-5/6 mx-auto mt-10"
    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
    >
     <motion.div 
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.5}}
     variants={{
       hidden: { opacity: 0, x: -50 },
       visible: { opacity: 1, x: 0 }
     }}>
        <div className="md:w-3/5 lg:w-3/6">
            <HText>OUR CLASSES</HText>
            <motion.p 
            className="py-5 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5}}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              cupiditate corporis iste impedit. Soluta expedita sunt voluptate
              dolorem accusamus rem.
            </motion.p>
        </div>
     </motion.div>
     <div className="mt-20 -ml-5 h-[353px] w-full overflow-x-auto overflow-y-hidden">
      <ul className="w-[2800px] whitespace-nowrap ">
        {classes.map((item, index) => (
          <ClassImages 
          key={`${item.name}-${index}`}
          name={item.name}
          description={item.description}
          image={item.image}
          />
        ))}
      </ul>
       
     </div>
    </motion.div>
   </section>
  )
}

export default OurClasses;