import React, {useState} from 'react';

export default function useHooks() {
  const [CurrentPage, setCurrentPage] = useState('Sign In');

  function handleCurrentPage({PageName}) {
    setCurrentPage(PageName);
  }
  return {CurrentPage, handleCurrentPage};
}
