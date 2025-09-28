import { Box, Button } from '@mui/material';

export function FormSubmitControls({
  isSubmiting,
  submitBtnLabel = 'Concluir',
}: Props) {
  return (
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
        {submitBtnLabel}
      </Button>
    </Box>
  );
}

type Props = {
  isSubmiting?: boolean;
  submitBtnLabel?: string;
};
