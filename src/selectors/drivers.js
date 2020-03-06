// Get visible drivers

export default (drivers, { status }) => {
  return drivers.filter((driver) => {
    return driver.status === status;
  });
};
