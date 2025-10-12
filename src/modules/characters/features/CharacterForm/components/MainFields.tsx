import { Box, Grid2, TextField, Typography } from '@mui/material';
import { Field } from 'formik';
import { Form } from '~/modules/shared/infra/components/Form/Form';
import { CharacterSectionFormData } from '../CharacterFormData';
import { FormSubmitControls } from './FormSubmitControls';
import { IntegerField } from '~/modules/shared/infra/components/IntegerField';
import { AttributesPointsField } from './AttributesPointsField';
import strengthImg from '~/assets/images/strength.png';
import speedImg from '~/assets/images/speed.png';
import controlImg from '~/assets/images/control.png';
import conjuringImg from '~/assets/images/conjuring.png';
import dexterityImg from '~/assets/images/dexterity.png';
import powImg from '~/assets/images/pow.png';
import psycheImg from '~/assets/images/psyche.png';
import vitalityImg from '~/assets/images/vitality.png';
import magResistance from '~/assets/images/magical-resistance.png';
import { FloatField } from '~/modules/shared/infra/components/FloatField';

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
          <Box
            mb={3}
            sx={{
              background:
                'linear-gradient(90deg, #7a6a54a0 0%, transparent 5%, transparent 95%, #7a6a54a0 100%);',
            }}
          >
            <Typography
              className="bg-with-darker-tile"
              variant="h2"
              lineHeight="35px"
              px={3}
              textTransform="uppercase"
              mb={3}
            >
              Informações básicas
            </Typography>

            <Grid2 container spacing={2}>
              <Grid2 container size={6}>
                <Grid2 size={6} pl={3}>
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

                <Grid2 container spacing={2} mb={2} pl={3}>
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
                    width: '100%',
                  }}
                  className="bg-with-darker-tile"
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

              <Grid2 container size={6} pr={3}>
                <Grid2 size={6}>
                  <Field
                    sx={{ mb: 1 }}
                    as={IntegerField}
                    name="Age"
                    label="Idade"
                    fullWidth
                    helperText={errors.Age}
                    error={Boolean(errors.Age)}
                  />

                  <Field
                    sx={{ mb: 1 }}
                    as={FloatField}
                    name="Weight"
                    label="Peso"
                    fullWidth
                    helperText={errors.Weight}
                    error={Boolean(errors.Weight)}
                  />

                  <Field
                    sx={{ mb: 1 }}
                    as={FloatField}
                    name="Height"
                    label="Altura"
                    fullWidth
                    helperText={errors.Height}
                    error={Boolean(errors.Height)}
                  />

                  <Field
                    sx={{ mb: 1 }}
                    as={IntegerField}
                    name="Level"
                    label="Nível"
                    required
                    fullWidth
                    helperText={errors.Level}
                    error={Boolean(errors.Level)}
                  />
                </Grid2>

                <Grid2 size={6}>
                  <Field
                    sx={{ mb: 1 }}
                    as={IntegerField}
                    name="Experience"
                    label="Experiência"
                    fullWidth
                    required
                    helperText={errors.Experience}
                    error={Boolean(errors.Experience)}
                  />

                  <Field
                    sx={{ mb: 1 }}
                    as={IntegerField}
                    name="Sanity"
                    label="Sanidade"
                    fullWidth
                    required
                    helperText={errors.Sanity}
                    error={Boolean(errors.Sanity)}
                  />

                  <Field
                    sx={{ mb: 1 }}
                    as={FloatField}
                    name="Money"
                    label="Dinheiro"
                    fullWidth
                    required
                    helperText={errors.Money}
                    error={Boolean(errors.Money)}
                  />
                </Grid2>
              </Grid2>
            </Grid2>
          </Box>

          <Box mb={3}>
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <Box className="bg-with-dark-tile">
                  <Typography
                    className="bg-with-darker-tile"
                    variant="h2"
                    lineHeight="35px"
                    textTransform="uppercase"
                    mb={3}
                    px={2}
                  >
                    Atributos
                  </Typography>

                  <Grid2 container spacing={1}>
                    <Grid2 size={6} className="bg-with-darker-tile" p={2}>
                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={strengthImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Strength"
                        label="Força"
                        fullWidth
                        helperText={errors.Strength}
                        error={Boolean(errors.Strength)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={speedImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Speed"
                        label="Velocidade"
                        fullWidth
                        helperText={errors.Speed}
                        error={Boolean(errors.Speed)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={dexterityImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Dexterity"
                        label="Destreza"
                        fullWidth
                        helperText={errors.Dexterity}
                        error={Boolean(errors.Dexterity)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={vitalityImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Vitality"
                        label="Vitalidade"
                        fullWidth
                        helperText={errors.Vitality}
                        error={Boolean(errors.Vitality)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={powImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Potency"
                        label="Potência"
                        fullWidth
                        helperText={errors.Potency}
                        error={Boolean(errors.Potency)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={conjuringImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Conjuration"
                        label="Conjuração"
                        fullWidth
                        helperText={errors.Conjuration}
                        error={Boolean(errors.Conjuration)}
                        sx={{ mb: 2 }}
                      />
                    </Grid2>

                    <Grid2 size={6} className="bg-with-darker-tile" p={2}>
                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={controlImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Control"
                        label="Controle"
                        fullWidth
                        helperText={errors.Control}
                        error={Boolean(errors.Control)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={magResistance}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="MagicResistance"
                        label="Resistência Mágica"
                        fullWidth
                        helperText={errors.MagicResistance}
                        error={Boolean(errors.MagicResistance)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        adornament={
                          <img
                            src={psycheImg}
                            width="28px"
                            height="28px"
                            style={{ borderRadius: '4px' }}
                          />
                        }
                        name="Psyche"
                        label="Psique"
                        fullWidth
                        helperText={errors.Psyche}
                        error={Boolean(errors.Psyche)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
                        name="ResourceType"
                        label="Tipo de Recurso"
                        fullWidth
                        helperText={errors.ResourceType}
                        error={Boolean(errors.ResourceType)}
                        sx={{ mb: 2 }}
                      />

                      <Field
                        as={AttributesPointsField}
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
              </Grid2>

              <Grid2 size={6} className="bg-with-dark-tile">
                <Typography
                  className="bg-with-darker-tile"
                  variant="h2"
                  lineHeight="35px"
                  px={3}
                  textTransform="uppercase"
                  mb={3}
                >
                  Aparência
                </Typography>

                <Box px={3}>
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

                  <Field
                    as={TextField}
                    name="Personality"
                    label="Personalidade"
                    fullWidth
                    helperText={errors.Personality}
                    error={Boolean(errors.Personality)}
                    sx={{ mb: 3 }}
                  />
                </Box>
              </Grid2>
            </Grid2>
          </Box>

          <FormSubmitControls submitBtnLabel="Enviar" onCancel={onCancel} />
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
  isSubmiting: boolean;
};
