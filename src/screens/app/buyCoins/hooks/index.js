import {useEffect, useMemo, useState} from 'react';
import {appIcons} from '../../../../services';
import DeviceInfo from 'react-native-device-info';
import { useIsFocused } from '@react-navigation/native';
const isTablet=DeviceInfo.isTablet()
// import { coinsData as data, PayWithData } from '../../../../services/dummy';



export function useHooks() {
  const [PayMethodModal, setPayMethodModal] = useState(false);
  const [showBuyCoinModal, setShowBuyCoinModal] = useState(false)
  const focused = useIsFocused()
useEffect(()=>{
  if(isTablet){
    setShowBuyCoinModal(true)
  }
},[])

  const handleTogglePayMethodModal = () => {
    setPayMethodModal(!PayMethodModal);
    if(isTablet){
      setShowBuyCoinModal(true)
    }
  };

  // const data = useMemo(
  //   () => [
  //     {
  //       label: '1 Coin (2.90$/Coin)',
  //       price: '2.90$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '5 Coins (1.80$/Coin)',
  //       price: '9.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '10 Coins (1.90$/Coin)',
  //       price: '19.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '20 Coins (1.50$/Coin)',
  //       price: '29.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '30 Coins (1.30$/Coin)',
  //       price: '39.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '50 Coins (1.40$/Coin)',
  //       price: '69.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '100 Coins (1.20$/Coin)',
  //       price: '119.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '200 Coins (1.00$/Coin)',
  //       price: '199.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '210 Coins (1.00$/Coin)',
  //       price: '199.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //     {
  //       label: '220 Coins (1.00$/Coin)',
  //       price: '199.0$',
  //       customIcon: appIcons.DollarCircle,
  //     },
  //   ],
  //   [],
  // );

  // const PayWithData = useMemo(
  //   () => [
  //     {label: 'Pay With Card', customIcon: appIcons.wallet},
  //     {label: 'Pay With BTC', customIcon: appIcons.BTC},
  //   ],
  //   [],
  // );


const data = useMemo(
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

  const PayWithData = useMemo(
  () => [
    {label: 'Pay With Card', customIcon: appIcons.wallet},
    {label: 'Pay With BTC', customIcon: appIcons.BTC},
  ],
  [],
);
  return {
    // variable
    data, PayWithData,
    // states
    showBuyCoinModal, setShowBuyCoinModal,
    focused,
    handleTogglePayMethodModal, PayMethodModal
  };
}
