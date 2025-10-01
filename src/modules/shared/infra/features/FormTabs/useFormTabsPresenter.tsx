import { useEffect, useState } from 'react';

export function useFormTabsPresenter({ tabIndex = 0, onTabChange }: Props) {
  const [selectedChildrenIndex, setSelectedChildrenIndex] = useState(tabIndex);

  const onChange = (index: number) => {
    setSelectedChildrenIndex(index);
    onTabChange?.(index);
  };

  useEffect(() => setSelectedChildrenIndex(tabIndex), [tabIndex]);

  return {
    selectedChildrenIndex,
    onChange,
  };
}

type Props = {
  tabIndex?: number;
  onTabChange?: (index: number) => void;
};
