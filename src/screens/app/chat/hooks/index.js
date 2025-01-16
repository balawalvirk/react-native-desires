import React, {useState, useRef, useMemo} from 'react';

export default function useHooks() {
  const [CurrentPage, setCurrentPage] = useState('Chat');

  function handleCurrentPage({PageName}) {
    setCurrentPage(PageName);
  }

  const data = useMemo(
    () => [
      {
        name: 'Jaydon Lubin',
        age: 48,
        location: 'Miami, FL',
        distance: 12,
        lastMessage: 'Sent 14 hrs ago',
      },
      {
        name: 'Ann Stanton',
        age: 29,
        location: 'Miami Beach, FL',
        distance: 8,
        lastMessage: 'Okay.',
        lastMessageTime: '1d',
        ShowOnline: true,
      },
      {
        name: 'Mira Lubin',
        age: 24,
        location: 'Chicago, USA',
        distance: 2,
        lastMessage: "I'll be there waiting for you.",
        lastMessageTime: '2d',
        ShowOnline: true,
      },
      {
        name: 'Anika Kenter',
        age: 28,
        location: '5 Depot Drive, FL',
        distance: 7,
        lastMessage: 'Sent 2d ago',
      },
      {
        name: 'Kierra Rhiel Madsen',
        age: 49,
        location: '7278 Grandrose, FL',
        distance: 4,
        lastMessage: 'Sent 3d ago',
      },
      {
        name: 'Kianna Stanton',
        age: 27,
        location: '831 St Louis, FL',
        distance: 9,
        lastMessage: 'Yeah, sure!',
        lastMessageTime: '3d',
        ShowOnline: true,
      },
    ],
    [],
  );

  const AnrufeData = useMemo(
    () => [
      {
        name: 'Jaydon Lubin',
        age: 48,
        location: 'Miami, FL',
        distance: 12,
        lastSeen: '1h ago',
      },
      {
        name: 'Ann Stanton',
        age: 29,
        location: 'Miami Beach, FL',
        distance: 8,
        lastSeen: '12h ago',
        missedCalls: 2,
      },
      {
        name: 'Mira Lubin',
        age: 24,
        location: 'Chicago, USA',
        distance: 2,
        lastSeen: '16h ago',
      },
      {
        name: 'Anika Kenter',
        age: 28,
        location: '5 Depot Drive, FL',
        distance: 7,
        missedCalls: 1,
        lastSeen: '1d ago',
      },
      {
        name: 'Kierra Rhiel Madsen',
        age: 49,
        location: '7278 Grandrose, FL',
        distance: 4,
        lastSeen: '1h ago',
      },
      {
        name: 'Kianna Stanton',
        age: 27,
        location: '831 St Louis, FL',
        distance: 9,
        missedCalls: 1,
        lastSeen: '1d ago',
      },
    ],
    [],
  );
  return {CurrentPage, handleCurrentPage, data, AnrufeData};
}
