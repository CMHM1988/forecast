/* eslint-disable */
import React from "react";
import { mount } from "enzyme";
import App from "App";

describe("<App>", () => {
   let component;

   beforeAll(() => {
      component = mount(<App />);
   });

   it("Renderea correctamente", () => {
      expect(component).toBeDefined()
   });
});
/* eslint-enable */
