import React, { Component } from "react";
import { toast } from "react-toastify";
import { Button, Select } from "antd";
import Device from "../../components/Device";
import { deviceTypes, deviceSortByTypes } from "../../constants/deviceConst";
import deviceService from "../../services/devices/deviceService";
import customSortForDevices from "../../utils/customSort";
import Modal from "../../Modals/AddEditDevice";
import "./index.css";

const { Option } = Select;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddDeviceModalOpened: false,
      backupDevicesData: [],
      devices: [],
      deviceTypeFilters: [],
      sortByType: "system_name",
    };
  }
  componentDidMount() {
    this.fetchDevices();
  }
  fetchDevices = async () => {
    const { deviceTypeFilters } = this.state;
    const response = await deviceService.fetchDevices();
    let filteredDevicesData = this.filterDevices(deviceTypeFilters, response);
    let sortedDevicesData = this.sortDevices(response);
    this.setState({
      backupDevicesData: sortedDevicesData,
      devices: filteredDevicesData,
    });
  };
  sortDevices = (response) => {
    response.sort(customSortForDevices(this.state.sortByType));
    return response;
  };

  filterDevices = (filters, devicesData) => {
    if (!(filters && filters.length)) return this.sortDevices(devicesData);
    devicesData = devicesData.filter((ele) => filters.includes(ele.type));
    return this.sortDevices(devicesData);
  };

  deviceTypeFilter = (filters) => {
    const { backupDevicesData } = this.state;
    return this.setState({
      deviceTypeFilters: filters,
      devices: this.filterDevices(filters, backupDevicesData),
    });
  };

  onAddDevice = async (val) => {
    const { system_name, type, hdd_capacity } = val;
    const response = await deviceService.createDevice({
      system_name,
      type,
      hdd_capacity,
    });
    this.setState({ isUpdateDeviceModalOpened: false });
    if (response && response.id) {
      toast.success("Device Added Successfully");
      this.fetchDevices();
    } else {
      toast.error("Device Not Added");
    }
    this.setState({ isAddDeviceModalOpened: false });
  };

  render() {
    const { isAddDeviceModalOpened, deviceTypeFilters, sortByType } =
      this.state;
    return (
      <div className="dashboard-container">
        <div className="dashboard-view">
          <div className="device-filter">
            <div className="device-filter-dropdown">
              <div className="device-type-dropdown">
                <Select
                  id="device-type-filters"
                  defaultValue={deviceTypeFilters}
                  placeholder="Select device filters"
                  mode="multiple"
                  style={{ minWidth: 200 }}
                  onChange={(filters) => {
                    this.deviceTypeFilter(filters);
                  }}
                >
                  {deviceTypes.map((ele, idx) => (
                    <Option key={idx} value={ele.value}>
                      {ele.label}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="sort-by-dropdown">
                <Select
                  defaultValue={sortByType}
                  style={{ width: 150 }}
                  onChange={(val) => {
                    this.state.devices.sort(customSortForDevices(val));
                    this.setState({ sortByType: val });
                  }}
                >
                  {deviceSortByTypes.map((ele, idx) => (
                    <Option key={idx} value={ele.value}>
                      {ele.label}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="add-device">
              <Button
                id="add-edit-button"
                type="primary"
                onClick={() => this.setState({ isAddDeviceModalOpened: true })}
              >
                Add Device
              </Button>
            </div>
          </div>
          <div>
            {this.state.devices.map((ele) => (
              <Device
                system_name={ele.system_name}
                type={ele.type}
                hdd_capacity={ele.hdd_capacity}
                key={ele.id}
                id={ele.id}
                onDeviceUpdated={() => this.fetchDevices()}
              />
            ))}
          </div>
        </div>
        {isAddDeviceModalOpened && (
          <Modal
            isAddDevice
            isVisible={(val) => this.setState({ isAddDeviceModalOpened: val })}
            onAddEdit={(val) => this.onAddDevice(val)}
          />
        )}
      </div>
    );
  }
}

export default Dashboard;
