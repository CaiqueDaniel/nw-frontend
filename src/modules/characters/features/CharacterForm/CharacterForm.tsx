import { Form } from '~/modules/shared/infra/components/Form/Form';
import { useCharacterFormPresenter } from './useCharacterFormPresenter';
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from '@mui/material';
import { CharacterFormData } from '../../domain/CharacterFactory';
import { MainFields } from './components/MainFields';
import { AttributesFields } from './components/AttributesFields';
import { FormTabs } from '~/modules/shared/infra/features/FormTabs/FormTabs';

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
          <Typography component="h1" mb={3}>
            Personagem
          </Typography>

          <Paper sx={{ p: 2 }}>
            <FormTabs
              tabs={[
                {
                  label: 'Personagem',
                  children: <MainFields errors={errors} />,
                },
                {
                  label: 'Atributos',
                  children: <AttributesFields errors={errors} />,
                },
              ]}
            />

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
          </Paper>
        </>
      )}
    </Form>
  );
}

type Props = {
  characterId?: string;
};
