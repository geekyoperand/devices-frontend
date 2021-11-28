import axios from "../httpService";

class DeviceService {
  async fetchDevices() {
    try {
      const result = await axios.get(`/devices`).then((res) => res.data);
      return result;
    } catch (ex) {
      return { apierror: ex.response.data };
    }
  }

  async createDevice(data) {
    try {
      const result = await axios.post(`/devices`, data).then((res) => res.data);
      return result;
    } catch (ex) {
      return { apierror: ex.response.data };
    }
  }

  async updateDevice(id, data) {
    try {
      const result = await axios
        .put(`/devices/${id}`, data)
        .then((res) => res.data);
      return result;
    } catch (ex) {
      return { apierror: ex.response.data };
    }
  }

  async deleteDevice(id) {
    try {
      const result = await axios
        .delete(`/devices/${id}`)
        .then((res) => res.data);
      return result;
    } catch (ex) {
      return { apierror: ex.response };
    }
  }
}

export default new DeviceService();
