import { Box, Grid2, TextField } from '@mui/material';
import { Field } from 'formik';
import { AttribuitesFormData } from '~/modules/characters/domain/CharacterFactory';
import { Form } from '~/modules/shared/infra/components/Form/Form';
import { FormSubmitControls } from './FormSubmitControls';

export function AttributesFields({
  initialValues,
  onSubmit,
  validation,
  isSubmiting,
}: Props) {
  return (
    <Form<AttribuitesFormData>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      {({ errors }) => (
        <>
          <Box mt={4} mb={2}>
            <Grid2 container spacing={2}>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Strength"
                  label="Força"
                  fullWidth
                  helperText={errors.Strength}
                  error={Boolean(errors.Strength)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Speed"
                  label="Velocidade"
                  fullWidth
                  helperText={errors.Speed}
                  error={Boolean(errors.Speed)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Dexterity"
                  label="Destreza"
                  fullWidth
                  helperText={errors.Dexterity}
                  error={Boolean(errors.Dexterity)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Vitality"
                  label="Vitalidade"
                  fullWidth
                  helperText={errors.Vitality}
                  error={Boolean(errors.Vitality)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Potency"
                  label="Potência"
                  fullWidth
                  helperText={errors.Potency}
                  error={Boolean(errors.Potency)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Conjuration"
                  label="Conjuração"
                  fullWidth
                  helperText={errors.Conjuration}
                  error={Boolean(errors.Conjuration)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Control"
                  label="Controle"
                  fullWidth
                  helperText={errors.Control}
                  error={Boolean(errors.Control)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="MagicResistance"
                  label="Resistência Mágica"
                  fullWidth
                  helperText={errors.MagicResistance}
                  error={Boolean(errors.MagicResistance)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={4}>
                <Field
                  as={TextField}
                  name="Psyche"
                  label="Psique"
                  fullWidth
                  helperText={errors.Psyche}
                  error={Boolean(errors.Psyche)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={6}>
                <Field
                  as={TextField}
                  name="ResourceType"
                  label="Tipo de Recurso"
                  fullWidth
                  helperText={errors.ResourceType}
                  error={Boolean(errors.ResourceType)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
              <Grid2 size={6}>
                <Field
                  as={TextField}
                  name="ResourceId"
                  label="ID do Recurso"
                  fullWidth
                  helperText={errors.ResourceId}
                  error={Boolean(errors.ResourceId)}
                  sx={{ mb: 2 }}
                />
              </Grid2>
            </Grid2>
          </Box>
          <FormSubmitControls isSubmiting={isSubmiting} />
        </>
      )}
    </Form>
  );
}

type Props = {
  onSubmit: (data: AttribuitesFormData) => void;
  initialValues: AttribuitesFormData;
  validation: any;
  isSubmiting?: boolean;
};
