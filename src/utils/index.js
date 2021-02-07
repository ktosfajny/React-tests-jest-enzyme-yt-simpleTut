// napisaliśmy sobie własną funkcję która złapie komoponent o podanym w argumentcie atrybucie data. Zrobiliśmy to po to aby nie musieć pisać za każdym razem tego ręcznie w każdym teście
export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
