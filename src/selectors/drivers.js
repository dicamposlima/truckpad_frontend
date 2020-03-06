// Get visible drivers

export default (drivers, inactives) => {
    return drivers.filter((driver, i) => {
        if(inactives){
            return true
        }
        return driver.active == 1
    });
};
