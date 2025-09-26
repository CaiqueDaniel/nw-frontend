import { Check, CopyAll } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useProductTokenBoxPresenter } from './useProductTokenBoxPresenter';

export function ProductTokenBox({ token, onClose }: Props) {
  const { wasCopied, onClickBtnCopyToClipboard } = useProductTokenBoxPresenter({
    token,
  });

  return (
    <Box>
      <Typography mb={3}>
        Por segurança, o token de autenticação será mostrado uma única vez. Caso
        precise visualizar essa informação novamente, gere um novo token.
      </Typography>

      <Box display="grid" gridTemplateColumns="1fr auto" columnGap={1} mb={3}>
        <TextField
          label="Token de autenticação"
          value={token}
          disabled
          fullWidth
        />
        <Button variant="outlined" onClick={onClickBtnCopyToClipboard}>
          {wasCopied ? <Check /> : <CopyAll />}
        </Button>
      </Box>

      <Button
        variant="contained"
        color="error"
        disabled={!wasCopied}
        onClick={onClose}
      >
        Eu copiei o token de segurança
      </Button>
    </Box>
  );
}

type Props = {
  onClose: () => void;
  token: string;
};
