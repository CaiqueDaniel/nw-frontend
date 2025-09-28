import { useState } from 'react';

export function useFormTabsPresenter() {
  const [selectedChildrenIndex, setSelectedChildrenIndex] = useState(0);

  const onChange = (index: number) => setSelectedChildrenIndex(index);

  return {
    selectedChildrenIndex,
    onChange,
  };
}
