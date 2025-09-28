import { Grid2, TextField } from '@mui/material';
import { Field } from 'formik';
import { CharacterFormData } from '~/modules/characters/domain/Character';

export function MainFields({ errors }: Props) {
  return (
    <>
      <Grid2 container spacing={2} mb={3}>
        <Grid2 size={6}>
          <Field
            as={TextField}
            name="Name"
            label="Nome"
            required
            fullWidth
            helperText={errors.Name}
            error={Boolean(errors.Name)}
          />
        </Grid2>
        <Grid2 size={6}>
          <Field
            as={TextField}
            name="Codename"
            label="Codinome"
            fullWidth
            helperText={errors.Codename}
            error={Boolean(errors.Codename)}
          />
        </Grid2>
      </Grid2>

      {/* Classificação */}
      <Grid2 container spacing={2} mb={3}>
        <Grid2 size={4}>
          <Field
            as={TextField}
            name="BreedId"
            label="Raça"
            required
            fullWidth
            helperText={errors.BreedId}
            error={Boolean(errors.BreedId)}
          />
        </Grid2>
        <Grid2 size={4}>
          <Field
            as={TextField}
            name="ClassId"
            label="Classe"
            required
            fullWidth
            helperText={errors.ClassId}
            error={Boolean(errors.ClassId)}
          />
        </Grid2>
        <Grid2 size={4}>
          <Field
            as={TextField}
            name="RankingId"
            label="Ranking"
            required
            fullWidth
            helperText={errors.RankingId}
            error={Boolean(errors.RankingId)}
          />
        </Grid2>
      </Grid2>

      {/* Características físicas */}
      <Grid2 container spacing={2} mb={3}>
        <Grid2 size={4}>
          <Field
            as={TextField}
            name="Age"
            label="Idade"
            fullWidth
            helperText={errors.Age}
            error={Boolean(errors.Age)}
          />
        </Grid2>
        <Grid2 size={4}>
          <Field
            as={TextField}
            name="Weight"
            label="Peso"
            fullWidth
            helperText={errors.Weight}
            error={Boolean(errors.Weight)}
          />
        </Grid2>
        <Grid2 size={4}>
          <Field
            as={TextField}
            name="Height"
            label="Altura"
            fullWidth
            helperText={errors.Height}
            error={Boolean(errors.Height)}
          />
        </Grid2>
      </Grid2>

      {/* Descrição */}
      <Grid2 container spacing={2} mb={3}>
        <Grid2 size={6}>
          <Field
            as={TextField}
            name="Personality"
            label="Personalidade"
            fullWidth
            helperText={errors.Personality}
            error={Boolean(errors.Personality)}
          />
        </Grid2>
        <Grid2 size={6}>
          <Field
            as={TextField}
            name="Appearance"
            label="Aparência"
            fullWidth
            helperText={errors.Appearance}
            error={Boolean(errors.Appearance)}
          />
        </Grid2>
        <Grid2 size={12}>
          <Field
            as={TextField}
            name="History"
            label="História"
            fullWidth
            helperText={errors.History}
            error={Boolean(errors.History)}
          />
        </Grid2>
      </Grid2>

      {/* Progresso */}
      <Grid2 container spacing={2} mb={3}>
        <Grid2 size={3}>
          <Field
            as={TextField}
            name="Level"
            label="Nível"
            fullWidth
            helperText={errors.Level}
            error={Boolean(errors.Level)}
          />
        </Grid2>
        <Grid2 size={3}>
          <Field
            as={TextField}
            name="Experience"
            label="Experiência"
            fullWidth
            helperText={errors.Experience}
            error={Boolean(errors.Experience)}
          />
        </Grid2>
        <Grid2 size={3}>
          <Field
            as={TextField}
            name="Sanity"
            label="Sanidade"
            fullWidth
            helperText={errors.Sanity}
            error={Boolean(errors.Sanity)}
          />
        </Grid2>
        <Grid2 size={3}>
          <Field
            as={TextField}
            name="Money"
            label="Dinheiro"
            fullWidth
            helperText={errors.Money}
            error={Boolean(errors.Money)}
          />
        </Grid2>
      </Grid2>
    </>
  );
}

type Props = {
  errors: Record<keyof CharacterFormData, string>;
};
