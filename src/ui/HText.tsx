import type { ReactNode } from "react";

interface Iprops {
children?: ReactNode;
}
const HText = ({children}: Iprops) => {
  return (
    <h1 className=" basis-3/5 font-bold text-3xl lg:text-4xl 
    ">
        {children}
    </h1>
  )
}

export default HText;