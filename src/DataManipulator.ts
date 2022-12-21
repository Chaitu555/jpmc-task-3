import { ServerRespond } from './DataStreamer';


export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  timestamp: Date,
  upper_bond: number,
  lower_bond: number,
  trigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row {
    const priceABC = (serverRespond[0].top_ask.price + serverRespond[0].top_bid.price) / 2;
    const priceDEF = (serverRespond[1].top_ask.price + serverRespond[1].top_bid.price) / 2;
    const ratio = priceABC / priceDEF;
    const upperBound = 1 + 0.05;
    const lowerBound = 1 - 0.05;
    return {
      price_abc: priceABC,
      price_def: priceDEF,
      ratio,
      timestamp: servrrRespond[0].timestamp > serverRespond[1]. timestamp?
        severrespond[0]. timestamp : serverRespond[1]. timestamp,
      upper_bound: upperBound,
      lower_bound: lowerbound,
      trigger_alert: (ratio > upperBound || ratio <lowerBound) ? ratio :  undefined,
    };
      };
    })
  }
}
