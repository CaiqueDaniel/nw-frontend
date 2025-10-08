import { Box, Grid2, TextField, Typography } from '@mui/material';
import { Field } from 'formik';
import { Form } from '~/modules/shared/infra/components/Form/Form';
import { CharacterSectionFormData } from '../CharacterFormData';
import { FormSubmitControls } from './FormSubmitControls';
import { IntegerField } from '~/modules/shared/infra/components/IntegerField';

export function MainFields({
  initialValues,
  onSubmit,
  onCancel,
  validation,
}: Props) {
  return (
    <Form<CharacterSectionFormData>
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validation}
    >
      {({ errors }) => (
        <Box>
          <Box>
            <Typography
              className="bg-with-dark-tile"
              variant="h2"
              padding={1}
              textTransform="uppercase"
            >
              Informações básicas
            </Typography>
            <Grid2 container spacing={2}>
              <Grid2 container size={6}>
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
                    label="Apelido"
                    fullWidth
                    helperText={errors.Codename}
                    error={Boolean(errors.Codename)}
                  />
                </Grid2>

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

                <Box
                  sx={{
                    bgcolor: '#412e1b',
                    pt: 0.5,
                    px: 3,
                    pb: 3,
                    mb: 3,
                    width: '100%',
                  }}
                  className="bg-with-dark-tile"
                >
                  <Typography
                    textTransform="uppercase"
                    sx={{
                      '-webkit-text-stroke': '0.5px black',
                    }}
                  >
                    História Pregressa
                  </Typography>
                  <Field
                    as={TextField}
                    name="History"
                    placeholder="As aventuras que levam até aqui..."
                    fullWidth
                    multiline
                    minRows={3}
                    maxRows={6}
                    helperText={errors.History}
                    error={Boolean(errors.History)}
                  />
                </Box>
              </Grid2>

              <Grid2 container size={6}></Grid2>
            </Grid2>
          </Box>

          <Grid2 container spacing={2} mb={3}>
            <Grid2 size={4}>
              <Field
                as={IntegerField}
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

          <Field
            as={TextField}
            name="Personality"
            label="Personalidade"
            fullWidth
            helperText={errors.Personality}
            error={Boolean(errors.Personality)}
            sx={{ mb: 3 }}
          />

          <Field
            as={TextField}
            name="Appearance"
            label="Aparência"
            fullWidth
            multiline
            minRows={3}
            maxRows={6}
            helperText={errors.Appearance}
            error={Boolean(errors.Appearance)}
            sx={{ mb: 3 }}
          />

          <Grid2 container spacing={2} mb={3}>
            <Grid2 size={3}>
              <Field
                as={IntegerField}
                name="Level"
                label="Nível"
                required
                fullWidth
                helperText={errors.Level}
                error={Boolean(errors.Level)}
              />
            </Grid2>
            <Grid2 size={3}>
              <Field
                as={IntegerField}
                name="Experience"
                label="Experiência"
                fullWidth
                required
                helperText={errors.Experience}
                error={Boolean(errors.Experience)}
              />
            </Grid2>
            <Grid2 size={3}>
              <Field
                as={IntegerField}
                name="Sanity"
                label="Sanidade"
                fullWidth
                required
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
                required
                helperText={errors.Money}
                error={Boolean(errors.Money)}
              />
            </Grid2>
          </Grid2>

          <FormSubmitControls submitBtnLabel="Próximo" onCancel={onCancel} />
        </Box>
      )}
    </Form>
  );
}

type Props = {
  onCancel: () => void;
  onSubmit: (data: CharacterSectionFormData) => void;
  initialValues: CharacterSectionFormData;
  validation: any;
};
