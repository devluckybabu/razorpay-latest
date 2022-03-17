const Razorpay = require('razorpay');

class config {
  private instance: any;
  constructor(authorization: { key_id: string; key_secret: string }) {
    if (authorization?.key_id && authorization?.key_secret) {
      this.instance = new Razorpay(authorization);
    };
  };
  protected call = (path: string, options?: any) => {
    return new Promise((resolev, reject) => {
      if (this.instance && typeof this.instance == "object") {
        const paths = path.split('/');
        const newInstance = this.instance?.[paths[0]]?.[paths[1]];
        const _hasInstance = newInstance && typeof newInstance == "function";
        if (_hasInstance) {
          newInstance(options).then((result: any) => {
            return resolev(result);
          }).catch((error: any) => reject({ error: true, status_code: error?.statusCode, ...error?.error }));
        } else {
          return reject({ error: true, description: `${paths[1]} function is not exist in ${paths[0]} object.` })
        }
      } else {
        return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' })
      }
    });
  };
  protected update = (path: string, id: string, notes: object) => {
    return new Promise((resolev, reject) => {
      if (this.instance && typeof this.instance == "object") {
        const paths = path.split('/');
        const newInstance = this.instance?.[paths[0]]?.[paths[1]];
        const _hasInstance = newInstance && typeof newInstance == "function";
        if (_hasInstance) {
          newInstance(id, { notes }).then((result: any) => {
            return resolev(result);
          }).catch((error: any) => reject({ error: true, status_code: error?.statusCode, ...error?.error }));
        } else {
          return reject({ error: true, description: `${paths[1]} function is not exist in ${paths[0]} object.` })
        }
      } else {
        return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' })
      }
    });
  };


  protected post = (path: string, id: string, options?: any) => {
    return new Promise((resolev, reject) => {
      if (this.instance && typeof this.instance == "object") {
        const paths = path.split('/');
        const newInstance = this.instance?.[paths[0]]?.[paths[1]];
        const _hasInstance = newInstance && typeof newInstance == "function";
        if (_hasInstance) {
          newInstance(id, options).then((result: any) => {
            return resolev(result);
          }).catch((error: any) => reject({ error: true, status_code: error?.statusCode, ...error?.error }));
        } else {
          return reject({ error: true, description: `${paths[1]} function is not exist in ${paths[0]} object.` })
        }
      } else {
        return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' })
      }
    });
  };
  protected capture = (paymentId: string, amount: number, currency: 'INR') => {
    return new Promise((resolev, reject) => {
      if (this.instance && typeof this.instance == "object") {
        const newInstance = this.instance?.payments?.capture;
        const _hasInstance = newInstance && typeof newInstance == "function";
        if (_hasInstance) {
          newInstance(paymentId, amount, currency).then((result: any) => {
            return resolev(result);
          }).catch((error: any) => reject({ error: true, status_code: error?.statusCode, ...error?.error }));
        } else {
          return reject({ error: true, description: `Capture function is not exist in payments object.` })
        }
      } else {
        return reject({ error: true, description: 'Authorization failed. Please check your key_id & key_secret' })
      }
    });
  };
};

export default config;