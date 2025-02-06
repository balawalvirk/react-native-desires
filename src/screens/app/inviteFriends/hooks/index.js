import { useEffect, useMemo, useState } from "react";
import DeviceInfo from "react-native-device-info";
const isTablet = DeviceInfo.isTablet();


export const useHooks = () => {
  const [visible, setVisible] = useState(isTablet)
  useEffect(() => {
    if (isTablet) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [])


  const data = useMemo(() => [
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 100, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 100, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 100, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 50, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 20, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Boost", Amount: 1, isRed: true },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 100, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Boost", Amount: 1, isRed: true },
    { Date: "12-12-2024, 12:10", Activity: "Ghost Mode", Amount: 1, isRed: true },
    { Date: "12-12-2024, 12:10", Activity: "Ghost Mode", Amount: 1, isRed: true },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 100, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Invitation", Amount: 30, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 20, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 60, isRed: false },
    { Date: "12-12-2024, 12:10", Activity: "Boost", Amount: 10, isRed: true },
    { Date: "12-12-2024, 12:10", Activity: "Ghost Mode", Amount: 1, isRed: true },
    { Date: "12-12-2024, 12:10", Activity: "Subscription", Amount: 100, isRed: false },
  ], [])
  return {
    data,
    visible, setVisible
  }
}