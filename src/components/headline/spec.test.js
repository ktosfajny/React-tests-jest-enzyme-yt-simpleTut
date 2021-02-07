import React from "react";
import { shallow } from "enzyme";

import Headline from "./index";

import { findByTestAttr } from "../../utils/index";

// w tym pliku pkazane jest jak testować komponent klasowy który jak nie przekaże się mu propów to nie renderuje nic

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline component", () => {
  describe("have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test desc",
      };

      wrapper = setUp(props);
    });

    it("should render without erros", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("should render a H1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("should render a desc", () => {
      const desc = findByTestAttr(wrapper, "descWrapper");
      expect(desc.length).toBe(1);
    });
  });

  //  ---------------------------------------

  describe("have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should not render", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});

// domyslnie jak uruchomisz teraz yarn test to pokaze ci tylko te testy które aktualnie nie są jeszcze zakomitowane ponieważ traktuje że te które już zakomitowałeś działają i są sprawdzone. Ale możesz to zmienić. Jak uruchomisz sobie yarn test to rozwinie się menu w terminalu gdzie możesz kliknąc sobie "w" i wtedy pokaże ci dodatkowe opcje i potem jak klikniesz 'a' to uruchomi wszystkie testy
