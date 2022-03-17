import convertor from "./convertor";
import orders from "./orders";

type types = "string" | "object" | "number" | "function" | "symbol" | "bigint" | "boolean" | "undefined";

const isValid = (value: any, type: types) => {
  return value && typeof value === type;
};




interface options {
  paymentId?: string;
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


class payments extends orders {
  payments = {
    get: (options?: options) => {
      if (options?.paymentId) return this.get('/payments/' + options?.paymentId);
      else return this.get('/payments', convertor.getOptions(options));
    },
    details: (paymentId: string) => this.get('/payments/' + paymentId),
    update: (paymentId: string, notes: object) => {
      return new Promise((resolve, reject) => {
        if (isValid(paymentId, "string") && isValid(notes, "object")) {
          this.update('/payments/' + paymentId, { notes }).then((result) => {
            return resolve(result);
          }).catch((error) => reject(error));
        } else if (!isValid(paymentId, 'string')) {
          return reject({ error: true, message: 'Payment ID must be a string' })
        } else if (!isValid(notes, 'object')) {
          return reject({ error: true, message: 'Notes must be an object' })
        }
      })
    },
    capture: (paymentId: string, amount: number, currency: 'INR') => {
      return new Promise((resolve, reject) => {
        if (paymentId && isValid(amount, 'number') && isValid(currency, 'string')) {
          this.post('/payments/' + paymentId + '/capture', { amount, currency })
            .then((result) => resolve(result)).catch((error) => reject(error));
        } else if (!paymentId) {
          return reject({ error: true, message: 'Payment Id is required parameter.' })
        } else if (!isValid(amount, 'number')) {
          return reject({ error: true, message: 'Amount is required parameter.' })
        } else if (!isValid(currency, 'string')) {
          return reject({ error: true, message: 'Currency is required parameter.' })
        }
      })
    },
    refundPayment: (paymentId: string,
      options?: {
        amount?: number;
        receipt?: string;
        speed: 'normal' | 'optimum';
      }) => {
      return new Promise((resolve, reject) => {
        if (isValid(paymentId, "string")) {
          if (options && !options?.speed) {
            return reject({ error: true, message: 'Speed is required parameter' })
          };
          this.post('/payments/' + paymentId + '/refund', options ?? {})
            .then((result) => resolve(result)).catch((error) => reject(error));
        } else {
          return reject({ error: true, message: 'Payment Id is required parameter' })
        }
      })
    },
    refunds: (paymentId: string, options?: options) => {
      return this.get('/payments/' + paymentId + '/refunds', convertor.getOptions(options));
    },
    getRefundDetails: (paymentId: string, refundId: string) => {
      return this.get(`/payments/${paymentId}/refunds/${refundId}`)
    }
  };
};

export default payments;