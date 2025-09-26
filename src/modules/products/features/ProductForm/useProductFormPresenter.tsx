import { useEffect, useState } from 'react';
import { useProductFormContext } from './ProductFormContext';
import { ProductFormData } from './ProductFormData';
import { mixed, object, string } from 'yup';

export function useProductFormPresenter({ productId, onCancel }: Props) {
  const { saveProduct, getProduct } = useProductFormContext();
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [initialValues, setInitialValues] =
    useState<ProductFormData>(emptyValues);

  const onSubmit = async (values: ProductFormData) => {
    setIsSubmiting(true);

    try {
      await saveProduct.execute(values);
      onCancel();
    } catch (error) {
      console.error(error);
    }

    setIsSubmiting(false);
  };

  const onInputFile = (
    setFieldValue: (field: string, value: any) => void,
    files: FileList
  ) => setFieldValue('cover', files.item(0));

  useEffect(() => {
    if (!productId) return;

    setIsFetching(true);

    getProduct
      .execute({ id: productId })
      .then((result) => setInitialValues({ ...result, cover: null }))
      .catch(console.error)
      .finally(() => setIsFetching(false));
  }, [productId]);

  return {
    initialValues,
    isSubmiting,
    isFetching,
    validation,
    onSubmit,
    onInputFile,
  };
}

const emptyValues: ProductFormData = {
  name: '',
  description: '',
  address: '',
  cover: null,
};

const validation = object({
  name: string()
    .required('Campo obrigatório')
    .max(255, 'Máximo de 255 caracteres'),
  description: string()
    .required('Campo obrigatório')
    .max(255, 'Máximo de 255 caracteres'),
  address: string()
    .required('Campo obrigatório')
    .max(2000, 'Máximo de 2000 caracteres'),
  cover: mixed().required('Campo obrigatório'),
});

type Props = {
  productId?: string;
  onCancel: () => void;
};
