import { useMemo } from "react";
import { appIcons } from "../utilities";

export const coinsData = useMemo(
    () => [
      {
        label: '1 Coin (2.90$/Coin)',
        price: '2.90$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '5 Coins (1.80$/Coin)',
        price: '9.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '10 Coins (1.90$/Coin)',
        price: '19.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '20 Coins (1.50$/Coin)',
        price: '29.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '30 Coins (1.30$/Coin)',
        price: '39.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '50 Coins (1.40$/Coin)',
        price: '69.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '100 Coins (1.20$/Coin)',
        price: '119.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '200 Coins (1.00$/Coin)',
        price: '199.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '210 Coins (1.00$/Coin)',
        price: '199.0$',
        customIcon: appIcons.DollarCircle,
      },
      {
        label: '220 Coins (1.00$/Coin)',
        price: '199.0$',
        customIcon: appIcons.DollarCircle,
      },
    ],
    [],
  );

 export  const PayWithData = useMemo(
    () => [
      {label: 'Pay With Card', customIcon: appIcons.wallet},
      {label: 'Pay With BTC', customIcon: appIcons.BTC},
    ],
    [],
  );