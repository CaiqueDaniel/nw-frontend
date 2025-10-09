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
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        position="relative"
        top="-35px"
      >
        <Typography
          variant="h1"
          bgcolor="#535a4e"
          border="2px solid #7a6a54"
          borderRadius="50px"
          textAlign="center"
          textTransform="uppercase"
          pt={1}
          pb={0.5}
          px={2}
        >
          Ficha de Personagem
        </Typography>
      </Box>

      <MainFields
        validation={validationMain}
        initialValues={charData}
        onSubmit={onSubmitCharSection}
        onCancel={onCancelCharSection}
      />

      {/* <Box sx={{ p: 2 }}>
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
      </Box> */}
    </Box>
  );
}

type Props = {
  characterId?: string;
};
