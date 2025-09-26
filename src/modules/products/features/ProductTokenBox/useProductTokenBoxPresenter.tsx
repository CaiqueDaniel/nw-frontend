import { useState } from 'react';
import { useProductTokenBoxContext } from './ProductTokenBoxContext';

export function useProductTokenBoxPresenter({ token }: Props) {
  const { clipboard } = useProductTokenBoxContext();
  const [wasCopied, setWasCopied] = useState(false);

  const onClickBtnCopyToClipboard = async () => {
    await clipboard.write(token);
    setWasCopied(true);
  };

  return { onClickBtnCopyToClipboard, wasCopied };
}

type Props = {
  token: string;
};
