import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

// jakaś konfiguracja enzyma, podobne było w tym wideo od tej dziewczyny

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true,
});
