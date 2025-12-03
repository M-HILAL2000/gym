import { SelectedPage } from "../../types/types";
import { motion } from "framer-motion";
import HText from "../../ui/HText";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.jpeg";

interface Iprops {
  setSelectedPage: (value: SelectedPage) => void;
}
const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white `;

const ContactUs = ({ setSelectedPage }: Iprops) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto min-h-full w-5/6 pt-30 py-10">
      <motion.div
        className=" mx-auto  md:h-5/6  flex flex-col md:justify-center md:items-center gap-10"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:my-5xl:px-17  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* HEADER  */}
          <HText>
            <span className="text-primary-500 ">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, tenetur eum. Quasi ea quos obcaecati sit ipsa nihil
            maxime eligendi?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Fugiat, consequuntur.
          </p>
        </motion.div>
        {/* FORM AND IMAGE  */}
        <div className="mt-10 justify-between gap-40 md:flex ">
          <motion.div
            className=" "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {/* FORM  */}
            <form
              target="_blank"
              className=""
              onSubmit={onSubmit}
              action="https://formsubmit.co/mo7amedhilal4220@gmail.com"
              method="POST"
            >
              <div className="mb-5">
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: true,
                    maxLength: 100,
                    minLength: 2,
                  })}
                />
                {errors.name && (
                  <p className=" text-primary-500">
                    {errors.name.type === "required" &&
                      "This fild is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 char."}
                    {errors.name.type === "minLength" &&
                      "Min length is 2 char."}
                  </p>
                )}
              </div>
              <div className="mb-5 ">
                <input
                  className={inputStyles}
                  type="email"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.email && (
                  <p className=" text-primary-500">
                    {errors.email.type === "required" &&
                      "This fild is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}
              </div>
              <div className="mb-5 ">
                <textarea
                  className=" w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                  id="message"
                  rows={4}
                  cols={50}
                  placeholder="MESSAGE"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                    minLength: 10,
                  })}
                />
                {errors.message && (
                  <p className=" text-primary-500">
                    {errors.message.type === "required" &&
                      "This fild is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                    {errors.message.type === "minLength" &&
                      "Min length is 10 char."}
                  </p>
                )}
              </div>
              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white hover:bg-primary-500"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 md:mt-0 basis-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-[url(/src/assets/EvolveText.png)] w-full before:absolute md:before:-bottom-20 md:before:-right-10 before:z-[-1]">
                <img 
                className="w-full rounded-4xl "
                src={ContactUsPageGraphic}
                alt="ContactUsPageGraphic"
                />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
