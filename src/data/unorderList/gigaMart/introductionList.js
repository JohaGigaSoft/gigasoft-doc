import Mark from '../../../components/Mark';

export const mobileApplication = [
  {
    id: 1,
    content:
      'Customer application for Android, iOS and web developed using Flutter.',
  },
  {
    id: 2,
    content: 'Delivery Boy application for Android developed using Flutter',
  },
  {
    id: 3,
    content:
      'Store application for both Android and iOS developed using Flutter.',
  },
  {
    id: 4,
    content:
      'Super Admin web panel developed using Laravel (admin can provide role base access).',
  },
  {
    id: 5,
    content:
      'Store web panel developed using Laravel (owner can provide role base access).',
  },
];

export const orderFlow = [
  {
    id: 1,
    content:
      'The customer places order from a store (can’t place order from multiple store at a time)',
  },
  {
    id: 2,
    content:
      'The delivery boys get that order in the order request section and accept it for delivery.',
  },
  {
    id: 3,
    content:
      'After delivery man confirmation the store owner get the order on their dashboard and start cooking and handover the item to delivery boy.',
  },
  {
    id: 4,
    content:
      'If the order is digitally paid the order will directly go into confirmed status and store get the order on their dashboard (will not depend on delivery boy’s confirmation).',
  },
  {
    id: 5,
    content:
      'The Delivery Guy accepts the order, confirm the order (if COD), picks-up the order and delivers the order to the Customer.',
  },
  {
    id: 6,
    content:
      'If self-pickup order, store will manage all the steps. For schedule order, all the operations will start before 15 minutes of schedule delivery time.',
  },
];

export const dispatchFlow = [
  {
    id: 1,
    content:
      'Delivery boys can see his/her nearest orders and accept it for delivery.',
  },
  {
    id: 2,
    content:
      'Admin can see currently available delivery boys with location view for a specific zone and can manually assign an order to a delivery boy.',
  },
];

export const transactionFlow = [
  {
    id: 1,
    content:
      'Item value = Original item price - (Item discount + Coupon discount for item)',
  },
  {
    id: 2,
    content:
      'Order value = (Item value + Tax/Vat (on item value) + Delivery Charge) – Coupon discount for deliver charge',
  },
  {
    id: 3,
    content:
      'For Self Pickup order: Order Value = Item Value + Tax/Vat (on item value)',
  },
  {
    id: 4,
    content: 'Customer can’t apply more than one coupon for an order.',
  },
];

export const adminCommission = [
  {
    id: 1,
    content: 'Admin can setup default commission for entire system.',
  },
  {
    id: 2,
    content:
      'There is another option for individual store commission. If admin want, can enable the individual commission for a specific store otherwise the default commission rate will be applicable for each store.',
  },
  {
    id: 3,
    content: (
      <span>
        Admin get commission on <Mark bg="#f6f7f8">Item Value</Mark>
      </span>
    ),
  },
];

export const storeEarning = [
  {
    id: 1,
    content:
      'After providing the admin commission, the rest amount of “Item value” will add in store earning.',
  },
  {
    id: 2,
    content:
      'The Tax/Vat is totally store’s earning and store need to manage this Tax/Vat for govt. manually.',
  },
];

export const deliveryBoyEarning = [
  {
    id: 1,
    content:
      'Actually we store two delivery fees in database. One is actual delivery cost and another one is customer paid delivery fee. Because there is option for free delivery, coupon for free delivery fee etc. So the earning for a delivery man is the actual delivery cost that is calculated based on distance. If the store is not a free delivery store and there is no coupon for free delivery, then the actual delivery cost and customer paid delivery fee will be same.',
  },
  {
    id: 2,
    content: 'The Delivery charge is totally Admin’s earning.',
  },
  {
    id: 3,
    content: 'Admin responsible for Coupon discount for deliver charge.',
  },
];

export const cashFlow = [
  {
    id: 1,
    content:
      'For digital transaction, the Order Amount will be added in Admin Wallet',
  },
  {
    id: 2,
    content:
      'For Cash on Delivery, the Order Amount will be added in delivery boys Cash in Hand wallet.',
  },
  {
    id: 3,
    content:
      'For the self-pickup but not digitally paid the Order Amount will be added in the store’s collected cash wallet.',
  },
];
