import convertor from "./convertor";
import payments from "./payments";

type types = "string" | "object" | "number" | "function" | "symbol" | "bigint" | "boolean" | "undefined";

const isValid = (value: any, type: types) => {
  return value && typeof value === type;
};




interface options {
  itemId?: string;
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


class items extends payments {
  items = {
    //get items
    get: (options?: options) => {
      if (options?.itemId) return this.get('/items/' + options?.itemId);
      else return this.get('/items', convertor.getOptions(options));
    },
    details: (itemId: string) => this.get('/items/' + itemId),
    //create item
    create: (data: {
      name: string;
      description?: string;
      amount: number;
      currency: 'INR' | 'USD'
    }) => this.post('/items', data),
    //update item
    update: (itemId: string, data: {
      name?: string;
      description?: string;
      amount?: number;
      currency?: "INR" | "USD";
      active?: boolean;
    }) => this.update('/items/' + itemId, data),
    delete: (itemId: string) => this.delete('/items', itemId)
  };
};

export default items;