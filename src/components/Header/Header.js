import { Icon } from "../Icons";
import {
  Div1,
  Icons1,
  Icons2,
  Span1,
  Span2,
  SocialIcons,
} from "./HeaderStyles";

import { AiFillLinkedin } from "react-icons/ai";

export const Header = () => {
  return (
    <>
      <header
        className="col-span-2 p-0 text-white text-3xl flex items-center"
        style={{
          background: "linear-gradient(to right, #66666e, #A9A9A9, #66666e)",
        }}
      >
        <Div1>
          <Icons1 href="https://coodesh.com/" target="_blank">
            <Icon className="icons" svg="coodesh" />
          </Icons1>

          <Icons2 href="https://teddydigital.io/" target="_blank">
            <Icon className="icons" svg="teddyDigital" />
          </Icons2>
        </Div1>
        <Div1>
          <div className="hidden sm:flex flex-row p-5 gap-1">
            <Span1>DropMail.me </Span1>
            <Span2> Experimental API</Span2>
          </div>
        </Div1>
        <SocialIcons>
          <div className="hidden sm:flex flex-col p-5">
            <a
              href="https://www.linkedin.com/company/coodesh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </SocialIcons>
      </header>
    </>
  );
};
