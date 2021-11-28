const customSortForDevices = (property) => {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (ele1, ele2) {
        let result
        if (property === 'hdd_capacity'){
            result = (parseInt(ele1[property]) < parseInt(ele2[property])) ? -1 : (ele1[property] > ele2[property]) ? 1 : 0;
            return result * sortOrder;
        }
        else {
            result = (ele1[property] < ele2[property]) ? -1 : (ele1[property] > ele2[property]) ? 1 : 0;
            return result;
        }
    }
}

export default customSortForDevices;