import { useCharacterFormPresenter } from './useCharacterFormPresenter';
import { Box, CircularProgress, Paper, Typography } from '@mui/material';
import { MainFields } from './components/MainFields';
import { AttributesFields } from './components/AttributesFields';
import { FormTabs } from '~/modules/shared/infra/features/FormTabs/FormTabs';

export function CharacterForm(props: Props) {
  const {
    isSubmiting,
    isFetching,
    validationMain,
    validationAttributes,
    attributesData,
    charData,
    onSubmitCharSection,
    onSubmitAttrSection,
  } = useCharacterFormPresenter(props);

  if (isFetching)
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <Typography component="h1" mb={3}>
        Personagem
      </Typography>

      <Paper sx={{ p: 2 }}>
        <FormTabs
          tabs={[
            {
              label: 'Personagem',
              children: (
                <MainFields
                  validation={validationMain}
                  initialValues={charData}
                  onSubmit={onSubmitCharSection}
                />
              ),
            },
            {
              label: 'Atributos',
              children: (
                <AttributesFields
                  validation={validationAttributes}
                  initialValues={attributesData}
                  onSubmit={onSubmitAttrSection}
                  isSubmiting={isSubmiting}
                />
              ),
            },
          ]}
        />
      </Paper>
    </>
  );
}

type Props = {
  characterId?: string;
};
