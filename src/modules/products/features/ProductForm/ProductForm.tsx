import { Form } from '~/modules/shared/infra/components/Form/Form';
import { useProductFormPresenter } from './useProductFormPresenter';
import { Field } from 'formik';
import {
  Box,
  Button,
  CircularProgress,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { ProductFormData } from './ProductFormData';

export function ProductForm(props: Props) {
  const {
    initialValues,
    isSubmiting,
    isFetching,
    validation,
    onSubmit,
    onInputFile,
  } = useProductFormPresenter(props);

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );

  return (
    <Form<ProductFormData>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      {({ errors, setFieldValue }) => (
        <>
          <Typography fontWeight="bold" fontSize="20px" mb={3}>
            Produto
          </Typography>

          <Field
            as={TextField}
            name="name"
            label="Nome"
            required
            fullWidth
            helperText={errors.name}
            error={Boolean(errors.name)}
            sx={{ mb: 3 }}
          />

          <Field
            as={TextField}
            name="address"
            label="Endereço WEB"
            required
            fullWidth
            helperText={errors.address}
            error={Boolean(errors.address)}
            sx={{ mb: 3 }}
          />

          <Field
            as={TextField}
            name="description"
            label="Descrição"
            required
            fullWidth
            multiline
            helperText={errors.description}
            error={Boolean(errors.description)}
            rows={4}
            sx={{ mb: 3 }}
          />

          <Box mb={3}>
            <Field
              name="coverInput"
              label="Thumbnail"
              type="file"
              onChange={(evt: any) =>
                onInputFile(setFieldValue, evt.target.files)
              }
              required
            />
            <FormHelperText error={Boolean(errors.cover)}>
              {errors.cover}
            </FormHelperText>
          </Box>

          <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={2}>
            <Button color="error" variant="contained" onClick={props.onCancel}>
              Cancelar
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={isSubmiting}
            >
              Concluir
            </Button>
          </Box>
        </>
      )}
    </Form>
  );
}

type Props = {
  productId?: string;
  onCancel: () => void;
};
