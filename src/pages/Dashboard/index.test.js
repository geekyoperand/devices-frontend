import React from "react";
import { mount, shallow } from "enzyme";
import Dashboard from "./index";
describe("Dashboard", () => {
  it("add edit button click simulation", () => {
    const mockCallBack = jest.fn();
    const dashboard = shallow(<Dashboard onClick={mockCallBack} />);
    dashboard.find("#add-edit-button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });

  it("check initial state of modal before clicking button", () => {
    const wrapper = shallow(<Dashboard />);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    expect(wrapper.state("isAddDeviceModalOpened")).toBe(false);
  });

  it("check state of modal boolean after clicking button ", () => {
    const wrapper = shallow(<Dashboard />);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();
    wrapper.find("#add-edit-button").at(0).simulate("click");
    expect(wrapper.state("isAddDeviceModalOpened")).toBe(true);
  });

  it("check unselected device filters length", () => {
    const wrapper = shallow(<Dashboard />);
    const componentInstance = wrapper.instance();
    componentInstance.componentDidMount();

    expect(wrapper.state("deviceTypeFilters").length).toBe(0);
  });
});
