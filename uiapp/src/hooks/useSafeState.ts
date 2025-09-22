'use client';

import { useState, useEffect } from 'react';

export const useSafeState = <T>(initialState: T): [T, (value: T) => void] => {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  return [state, setState];
};