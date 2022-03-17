import convertor from "./convertor";
import settlements from "./settlements";


interface options {
  refundId?: string;
  /**
   * @from string (optional) = "2022-01-01"
   */
  from?: string;
  /**
   * @to string (optional) = "2022-01-01"
   */
  to?: string;
  /**
   * @skip number (optional) = default value is 0
   */
  skip?: number;
  /**
   * @count number (optional) = default value is 10
   */
  count?: number;
};


class razorpay extends settlements {
  refunds = {
    //get refunds
    get: (options?: options) => {
      if (options?.refundId) return this.get('/refunds/' + options?.refundId);
      else return this.get('/refunds', convertor.getOptions(options));
    },
    //refund details
    details: (refundId: string) => this.get('/refunds/' + refundId),
    refundPayment: this.payments.refundPayment,
    update: (refundId: string, notes: object) => this.update('/refunds/' + refundId, { notes })
  };
};

export default razorpay;