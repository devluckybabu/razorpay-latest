import API from "./api";
import convertor from "./convertor";

interface options {
  orderId?: string;
  /**
   * @from string (optional) = "2022-01-01"
   */
  from?: string;
  /**
   * @to string (optional) = "2022-01-01"
   */
  to?: string;
  /**
   * @athorized boolean (optional) = true or false
   */
  authorized?: boolean;
  /**
   * @receipt string (optional) = "receipt#01"
   */
  receipt?: string;
  /**
   * @skip number (optional) = default value is 0
   */
  skip?: number;
  /**
   * @count number (optional) = default value is 10
   */
  count?: number;
};


class orders extends API {
  orders = {
    get: (options?: options) => {
      if (options?.orderId) return this.get('/orders/' + options?.orderId);
      else return this.get('/orders', convertor.orderOptions(options));
    },
    details: (orderId: string) => this.get('/orders/' + orderId),
    create: (data: {
      amount: number;
      currency: "INR";
      receipt?: string;
      notes?: object;
      method?: string;
      payment_capture?: boolean;
    }) => this.post('/orders', data),
    peyments: (orderId: string) => this.get('/orders/' + orderId + '/payments'),
    update: (orderId: string, notes: object) => this.update('/orders/' + orderId, { notes })
  };
};

export default orders;