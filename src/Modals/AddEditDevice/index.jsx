import React, { Component } from 'react';
import { Button, Modal, Form, Input, Select } from 'antd';
import { deviceTypes } from "../../constants/deviceConst";

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

class AddEditDevice extends Component {
    render() {
        const { isAddDevice } = this.props;
        return (
            <Modal
                title={isAddDevice ? "Add Device" : "Update Device"}
                centered
                closable
                visible={true}
                onCancel={() => this.props.isVisible(false)}
                footer={null}
            >
                <Form
                    {...formItemLayout}
                    onFinish={(val) => this.props.onAddEdit(val)}
                >

                    <Form.Item name="system_name" label="System Name"
                        rules={[
                            {
                                type: "string",
                                message: "The input is not a valid name",
                            },
                            {
                                required: true,
                                message: "Please input system name",
                            },
                        ]}
                        initialValue={!isAddDevice ? this.props.data.system_name : ''}
                    >
                        <Input name="system_name" />
                    </Form.Item>

                    <Form.Item name="type" label="Type"
                        rules={[
                            {
                                required: true,
                                message: "Please select atleast one type",
                            },
                        ]}

                        initialValue={!isAddDevice ? this.props.data.type : ''}>
                        <Select placeholder="Device Type">
                            {deviceTypes.map((ele, idx) => {
                                if (idx === 0)
                                    return null
                                return (
                                    < Option key={idx} value={ele.value} >
                                        {ele.label}
                                    </Option>
                                )
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item name="hdd_capacity" label="HDD Capacity"
                        rules={[
                            {
                                pattern: new RegExp(/^((?:[1-9][0-9]*)(?:\.[0-9]+)?)$/),
                                message: "The input is not a valid hdd capacity",
                            },
                            {
                                required: true,
                                message: "Please input a valid number",
                            },
                        ]}
                        initialValue={!isAddDevice ? this.props.data.hdd_capacity : ''}
                    >
                        <Input name="hdd_capacity" />
                    </Form.Item>


                    <Form.Item style={{ display: 'flex', justifyContent: 'end' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ float: "right", margin: '0 15px' }}
                        >
                            {isAddDevice ? 'Add' : 'Update'}
                        </Button>
                        <Button
                            onClick={() => this.props.isVisible(false)}
                            style={{ float: "right" }}
                        >
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>

            </Modal >
        );
    }
}

export default AddEditDevice;