import { Form } from '~/modules/shared/infra/components/Form/Form';
import { useCharacterFormPresenter } from './useCharacterFormPresenter';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { CharacterFormData } from '../../domain/CharacterFactory';
import { MainFields } from './components/MainFields';
import { AttributesFields } from './components/AttributesFields';

export function CharacterForm(props: Props) {
  const { initialValues, isSubmiting, isFetching, validation, onSubmit } =
    useCharacterFormPresenter(props);

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );

  return (
    <Form<CharacterFormData>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      {({ errors }) => (
        <>
          <Typography fontWeight="bold" fontSize="20px" mb={3}>
            Personagem
          </Typography>

          <MainFields errors={errors} />
          <AttributesFields errors={errors} />

          <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap={2}>
            <Button color="error" variant="contained">
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
  characterId?: string;
};
