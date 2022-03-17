const toDateNumber = (date?: any) => {
  if (date) {
    const new_date = new Date(date)?.getTime();
    const isValid = !isNaN(new_date);
    return isValid ? new_date : '';
  }
  return '';
}

const toParams = (data?: object) => {
  if (data && typeof data == "object") {
    const params = Object.entries(data).map(([key, value]) => `${key}=${value}`).join("&");
    return '?' + params;
  };
  return '';
};

const getOptions = (params?: any) => {
  if (params && typeof params == "object") {
    const to = toDateNumber(params.to);
    const from = toDateNumber(params.from);
    const skip = typeof params.skip == "number" ? params.skip : 0;
    const count = typeof params.count == "number" ? params.count : 10;
    return ({ from, to, skip, count });
  }
  return {};
}
const orderOptions = (params?: any) => {
  if (params && typeof params == "object") {
    const to = toDateNumber(params.to);
    const from = toDateNumber(params.from);
    const skip = typeof params.skip == "number" ? params.skip : 0;
    const count = typeof params.count == "number" ? params.count : 10;
    const authorized = params?.authorized == true ? 1 : 0;
    const receipt = typeof params?.receipt == "string" ? params?.receipt : '';
    return ({ from, to, skip, count, authorized, receipt });
  }
  return {};
}

export default { toDateNumber, toParams, getOptions, orderOptions };

