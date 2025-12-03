import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-center gap-16 md:flex md:justify-between md:items-center mx-auto w-5/6 py-10">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="Logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            eveniet mollitia adipisci nulla neque fugit magnam veniam a. Quos
            qui in illo iure repudiandae? Ab aspernatur error unde ipsum!
            Deserunt.
          </p>
          <p>&copy; Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem, ipsum dolor.</p>
            <p className="my-5">Lorem, ipsum dolor dfsds.</p>
            <p >Lorem, ipsum .</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Lorem, ipsum dolor Lorem ipsum dolor sit amet..</p>
            <p className="my-5">01011111111</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
