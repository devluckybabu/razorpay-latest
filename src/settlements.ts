import convertor from "./convertor";
import items from "./items";






interface options {
  id?: string;
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


class settlements extends items {
  settlements = {
    //get settlements
    get: (options?: options) => {
      if (options?.id) return this.get('/settlements/' + options?.id);
      else return this.get('/settlements', convertor.getOptions(options));
    },
    details: (settlementId: string) => this.get('/settlements/' + settlementId),
    getInstantSettlements: (options: options) => this.get('/settlements/ondemand', convertor.getOptions(options)),
    detail: (settlementId: string) => this.get('/settlements/' + settlementId),
    //create item
    recon: (options: {
      year: number;
      month: number;
      day?: number;
      skip?: number;
      count?: number;
    }) => this.get('/settlements/recon/combined', options),
    create: (options: {
      amount: number;
      settle_full_balance?: boolean;
      description?: string;
      notes?: object;
    }) => this.post('/settlements/ondemand', options)
  };
};

export default settlements;