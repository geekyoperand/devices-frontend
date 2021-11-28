import React from "react";
import { shallow } from "enzyme";
import AddEditDeviceModal from "./index";
describe("AddEditDeviceModal", () => {
  it("check modal props for add modal", () => {
    const wrapper = shallow(
      <AddEditDeviceModal
        data={{
          system_name: "TEST",
          type: "MAC",
          hdd_capacity: 10,
        }}
        isAddDevice={true}
      />
    );
    expect(wrapper.find("#add-button").text()).toBe("Add");
  });
  it("check modal props for edit modal", () => {
    const wrapper = shallow(
      <AddEditDeviceModal
        data={{
          system_name: "TEST",
          type: "MAC",
          hdd_capacity: 10,
        }}
        isAddDevice={false}
      />
    );
    expect(wrapper.find("#add-button").text()).toBe("Update");
  });
});
