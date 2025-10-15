import { useCharacterFormPresenter } from './useCharacterFormPresenter';
import { Box, CircularProgress, Typography } from '@mui/material';
import { MainFields } from './components/MainFields';

export function CharacterForm(props: Props) {
  const {
    isSubmiting,
    isFetching,
    validation,
    charData,
    breeds,
    classes,
    rankings,
    onSubmit,
    onCancel,
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
        validation={validation}
        initialValues={charData}
        onSubmit={onSubmit}
        onCancel={onCancel}
        isSubmiting={isSubmiting}
        breeds={breeds}
        classes={classes}
        rankings={rankings}
      />
    </Box>
  );
}

type Props = {
  characterId?: string;
};
