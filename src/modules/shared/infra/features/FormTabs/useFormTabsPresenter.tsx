import { ReactNode, useState } from 'react';

export function useFormTabsPresenter({ children }: Props) {
  const [selectedChildrenIndex, setSelectedChildrenIndex] = useState(0);
  const [selectedChildren, setSelectedChildren] = useState<ReactNode>(
    children.at(0) || null
  );

  const onChange = (index: number) => {
    setSelectedChildren(children[index]);
    setSelectedChildrenIndex(index);
  };

  return {
    selectedChildren,
    selectedChildrenIndex,
    onChange,
  };
}

type Props = {
  children: ReactNode[];
};
