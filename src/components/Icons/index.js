import PropTypes from "prop-types";

import Coodesh from "./IconsSvg/coodesh.svg";
import TeddyDigital from "./IconsSvg/teddyDigital.svg";
import Linkedin from "./IconsSvg/linkedin.svg";
import MagnifyingGlass from "./IconsSvg/magnifyingGlass.svg";
import Copy from "./IconsSvg/copy.svg";

export const Icon = ({ svg }) => {
  return (
    <>
      {svg === "copy" && <img alt="copy" src={Copy} />}
      {svg === "coodesh" && <img src={Coodesh} alt="Coodesh" />}

      {svg === "teddyDigital" && <img src={TeddyDigital} alt="TeddyDigital" />}

      {svg === "linkedin" && <img alt="linkedin" src={Linkedin} />}

      {svg === "copy" && <img src={Copy} alt="Copy" />}

      {svg === "magnifyingGlass" && (
        <img src={MagnifyingGlass} alt="magnifyingGlass" />
      )}
    </>
  );
};

Icon.propTypes = {
  svg: PropTypes.oneOf(["coodesh", "teddyDigital", "magnifyingGlass", "copy"])
    .isRequired,
};
