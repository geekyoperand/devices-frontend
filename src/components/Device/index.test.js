import React from "react";
import { shallow } from "enzyme";
import Device from "./index";
describe("Device", () => {
  it("check state of modal before hitting edit", () => {
    const wrapper = shallow(<Device />);
    expect(wrapper.state("isUpdateDeviceModalOpened")).toBe(false);
  });

  it("check state of modal after hitting edit ", () => {
    const wrapper = shallow(<Device />);
    wrapper.find("#edit-button").at(0).simulate("click");
    expect(wrapper.state("isUpdateDeviceModalOpened")).toBe(true);
  });
});
