import { Box, Typography, Grid2, TextField } from '@mui/material';
import { Field } from 'formik';
import { CharacterFormData } from '~/modules/characters/domain/Character';

export function AttributesFields({ errors }: Props) {
  return (
    <>
      <Box mt={4} mb={2}>
        <Typography fontWeight="bold" fontSize="16px" mb={2}>
          Atributos
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Strength"
              label="Força"
              fullWidth
              helperText={errors.Attributes?.Strength}
              error={Boolean(errors.Attributes?.Strength)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Speed"
              label="Velocidade"
              fullWidth
              helperText={errors.Attributes?.Speed}
              error={Boolean(errors.Attributes?.Speed)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Dexterity"
              label="Destreza"
              fullWidth
              helperText={errors.Attributes?.Dexterity}
              error={Boolean(errors.Attributes?.Dexterity)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Vitality"
              label="Vitalidade"
              fullWidth
              helperText={errors.Attributes?.Vitality}
              error={Boolean(errors.Attributes?.Vitality)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Potency"
              label="Potência"
              fullWidth
              helperText={errors.Attributes?.Potency}
              error={Boolean(errors.Attributes?.Potency)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Conjuration"
              label="Conjuração"
              fullWidth
              helperText={errors.Attributes?.Conjuration}
              error={Boolean(errors.Attributes?.Conjuration)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Control"
              label="Controle"
              fullWidth
              helperText={errors.Attributes?.Control}
              error={Boolean(errors.Attributes?.Control)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.MagicResistance"
              label="Resistência Mágica"
              fullWidth
              helperText={errors.Attributes?.MagicResistance}
              error={Boolean(errors.Attributes?.MagicResistance)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={4}>
            <Field
              as={TextField}
              name="Attributes.Psyche"
              label="Psique"
              fullWidth
              helperText={errors.Attributes?.Psyche}
              error={Boolean(errors.Attributes?.Psyche)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={6}>
            <Field
              as={TextField}
              name="Attributes.ResourceType"
              label="Tipo de Recurso"
              fullWidth
              helperText={errors.Attributes?.ResourceType}
              error={Boolean(errors.Attributes?.ResourceType)}
              sx={{ mb: 2 }}
            />
          </Grid2>
          <Grid2 size={6}>
            <Field
              as={TextField}
              name="Attributes.ResourceId"
              label="ID do Recurso"
              fullWidth
              helperText={errors.Attributes?.ResourceId}
              error={Boolean(errors.Attributes?.ResourceId)}
              sx={{ mb: 2 }}
            />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

type Props = {
  errors: Record<keyof CharacterFormData, string>;
};
