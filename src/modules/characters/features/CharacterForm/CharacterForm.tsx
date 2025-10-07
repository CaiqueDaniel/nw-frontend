import { useCharacterFormPresenter } from './useCharacterFormPresenter';
import { Box, CircularProgress, Typography } from '@mui/material';
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
    currentFormTab,
    setCurrentFormTab,
    onSubmitCharSection,
    onSubmitAttrSection,
    onCancelAttrSection,
    onCancelCharSection,
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

      <Box sx={{ p: 2 }}>
        <FormTabs
          tabIndex={currentFormTab}
          onTabChange={setCurrentFormTab}
          tabs={[
            {
              label: 'Personagem',
              children: (
                <MainFields
                  validation={validationMain}
                  initialValues={charData}
                  onSubmit={onSubmitCharSection}
                  onCancel={onCancelCharSection}
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
                  onCancel={onCancelAttrSection}
                  isSubmiting={isSubmiting}
                />
              ),
            },
          ]}
        />
      </Box>
    </>
  );
}

type Props = {
  characterId?: string;
};
