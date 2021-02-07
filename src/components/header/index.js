import React from "react";
import "./styles.scss";
import Logo from "../../assets/graphics/logo.png";

const Header = (props) => {
  return (
    // jesli piszesz test który pobiera dany element na podstawie jego klasy i ktoś potem zmieni klase to test będzie failed. Dlatego dobrze jest zrobić sobie specjalny data- atrybut i to za pomocą niego pobierać dany komponent
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          {/* teraz inni developerzy wiedzą że poniższy img jest używany w testach za pomocą data-test */}
          <img src={Logo} alt="asdas" data-test="logoIMG" />
        </div>
      </div>
    </header>
  );
};

export default Header;
