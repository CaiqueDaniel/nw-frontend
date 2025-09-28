import { ReactNode, useState } from 'react';

export function useFormTabsPresenter({ children }: Props) {
  const [selectedChildrenIndex, setSelectedChildrenIndex] = useState(0);

  const onChange = (index: number) => setSelectedChildrenIndex(index);

  return {
    selectedChildren: children.at(selectedChildrenIndex),
    selectedChildrenIndex,
    onChange,
  };
}

type Props = {
  children: ReactNode[];
};
