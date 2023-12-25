import React from "react";
// photo
import myimage from "../../Shared/photo.jpg";

export default function Aboutus() {
  return (
    <div className="text-white w-full p-10 ">
      <header className="md:flex w-full ">
        <div className="md:w-1/4 p-2  ">
          <img
            className={`w-[40%] rounded-full  md:w-full `}
            width={window.screen.width < 760 ? "20 rem " : " 70 rem"}
            height={window.screen.width < 760 ? " 20 rem " : " 70 rem"}
            src={myimage}
          ></img>
        </div>
        <div className="md:w-3/4 p-5">
          <p>
            Dedicated physics student at Shahid Beheshti University with a keen
            interest in web development. Equipped with a solid foundation in
            front-end technologies, including HTML, CSS, Tailwind, and
            Bootstrap. Demonstrated commitment to continuous learning by
            expanding skill set to include JavaScript and React for both
            front-end and back-end development. Despite limited professional
            experience, I am enthusiastic about pursuing a career in web
            programming and am actively seeking opportunities for a junior stack
            position or internship. My passion for both front-end and back-end
            development, combined with a strong academic background, positions
            me as a motivated and adaptable candidate ready to contribute to
            innovative projects.
          </p>
        </div>
      </header>
      <div className="mt-5 p-5">
        <h1 className="font-bold text-3xl">My Skills</h1>
        <div className="flex pt-5 items-center justify-around">
          <img
            className=" "
            width="100"
            alt="HTML5 logo and wordmark"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
          ></img>
          <img
            width="100"
            alt="CSS3 logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/64px-CSS3_logo.svg.png"
          ></img>
          <img
            width="100"
            alt="Tailwind CSS Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png"
          ></img>
          <img
            width="100"
            alt="Bootstrap logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
          ></img>
        </div>
        <div className="pt-5 flex items-center justify-around mt-10 ">
          <img
            width="100"
            alt="Unofficial JavaScript logo 2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"
          ></img>
          <img
            width="100"
            alt="React"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png"
          ></img>
          <img
            width="100"
            alt="Git icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/64px-Git_icon.svg.png"
          ></img>
        </div>
      </div>
    </div>
  );
}
