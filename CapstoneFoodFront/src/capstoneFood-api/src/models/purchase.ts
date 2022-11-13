/* tslint:disable */
import { PurchaseItem } from './purchase-item';
import { User } from './user';
export interface Purchase {
  dateOfPurchase?: string;
  id?: number;
  purchaseItems?: Array<PurchaseItem>;
  totalcost?: number;
  user?: User;
}
