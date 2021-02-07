import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

import { findByTestAttr } from "../../utils/index"; // importujemy napisaną przez nas funkcją która szuka danego elementu w komponencie, użyjemy jej aby zautomatyzować wyszukiwanie elementów które powwiny się wyrenderować w testach

// jeśli np piszemy sobie jakieś testy i w każdym np renderujemy ten sam komponent z którego potem coś wyciagamy itd to możemy zrobic sobie tylko jedną funkcję setUpową która go wyrenddruje żeby nie powtarzać tego renderowania danego komponentu wiele razy
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

// describe może grupować test
describe("Header ocmponent", () => {
  // ale wewnatrz jednego descrite możesz też napisać kolejne describe żeby pogrupować jeszcze bardziej testy itd

  let component;

  // beforeEach to funkcja która uruchomi się przed uruchomieniem kazdego z testów, używamy jej aby stworzyć w niej component
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    // const component = shallow(<Header />); // shallow wyrenderuje komponent bez dzieci (tych z children) - moża też przypisać do setup() żeby wyrenderował <Header/>
    // na ten moment zakomentowalem powyższe const component = setUp(); bo zamiast przypisywać to w każdym teście do setUp to lepiej użyć beforeEach

    console.log(component.debug()); // .degub() wyświetla w konsoli czym właściwie jest ten component

    // const wrapper = component.find(`[data-test='headerComponent']`); // find pozwala znaleźć element o podanej nazwie w tym componencie na którym wywołuje się find, czyli w komponencie <Header/> szukamy elementu który ma klasę .headerComponent. Na razie zakomentowałem bo używamy teraz własnej funkcji która wyłapie element

    const wrapper = findByTestAttr(component, "headerComponent");

    expect(wrapper.length).toBe(1); // okazuje się że faktycznie component Header wyrenderował np diva o klasie headerComponent dlatego też długość wrappera będzie 1 (no bo zawiera dokładnie 1 element o tej klasie - ale jak np w tym <Header/> wyrenderujesz sobie np 2 divy o tej samej klasie którą tutaj szukasz i expected()toBe(1) no to zwróci błąd bo miał być tylko 1 element a jest 2)
  });

  it("should render logo without errors", () => {
    // const component = setUp(); // tutaj korzystamy już z setUppowej funkcji (nazwa dowolna oczywiście) która renderuje komponent
    // na ten moment zakomentowalem powyższe const component = setUp(); bo zamiast przypisywać to w każdym teście do setUp to lepiej użyć beforeEach
    // const logo = component.find(`[data-test='logoIMG']`); // zakomentowałem to bo skorzystamy z własnoręcznie napisanej funkcji która autoamtyzuje łapanie tego elementu
    const logo = findByTestAttr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
