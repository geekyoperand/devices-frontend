import React, { Component } from 'react';
import { Button } from 'antd';
import { toast } from "react-toastify";
import deviceService from '../../services/devices/deviceService';
import Modal from '../../Modals/AddEditDevice';
import { getDeviceType } from '../../utils/devices';
import './index.css';

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdateDeviceModalOpened: false,
        }
    }
    onDeviceUpdation = async (val) => {
        const { id } = this.props
        const response = await deviceService.updateDevice(id, val);
        this.setState({ isUpdateDeviceModalOpened: false })
        if (response === 1) {
            toast.success("Device Updated Successfully");
        } else {
            toast.error("Device Not Updated");
        }
        this.props.onDeviceUpdated()
    }
    onDeviceDeletion = async () => {
        const response = await deviceService.deleteDevice(this.props.id);
        this.setState({ isUpdateDeviceModalOpened: false })
        if (response === 1) {
            toast.success("Device Deleted Successfully");
        } else {
            toast.error("Device Not Deleted");
        }
        this.props.onDeviceUpdated()
    }
    render() {
        const { isUpdateDeviceModalOpened } = this.state;
        const { system_name, type, id, hdd_capacity } = this.props;
        return (
            <div className="device-container" key={id}>
                <div style={{ width: '75%' }}>
                    <div className='device-name'> {system_name} </div>
                    <div className='device-type'> {getDeviceType(type)} </div>
                    <div className='device-storage'> {hdd_capacity} GB </div>
                </div>
                <div className="device-action">
                    <Button type="primary" onClick={() => this.setState({ isUpdateDeviceModalOpened: true })}>
                        Edit
                    </Button>
                    <Button
                        onClick={() => this.onDeviceDeletion()}
                        style={{ float: "right" }}
                    >
                        Delete
                    </Button>
                </div>
                {isUpdateDeviceModalOpened && <Modal data={this.props} isVisible={(val) => this.setState({ isUpdateDeviceModalOpened: val })} onAddEdit={(val) => this.onDeviceUpdation(val)} />}
            </div >
        );
    }
}

export default Devices;