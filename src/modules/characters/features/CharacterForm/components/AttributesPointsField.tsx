import { Box, Button, SxProps, TextFieldProps } from '@mui/material';
import { ReactNode, useState } from 'react';
import { IntegerField } from '~/modules/shared/infra/components/IntegerField';

export function AttributesPointsField({ adornament, ...props }: Props) {
  const [value, setValue] = useState(props.value ?? '');

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    props.onChange?.(e as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="auto 1fr auto"
      alignItems="center"
      gap={1}
      mb={1}
    >
      <Button
        sx={styles}
        onClick={() =>
          setValue((prev) =>
            Number(prev) <= 0 ? prev : String(Number(prev) - 1)
          )
        }
      >
        -
      </Button>
      <Box display="flex" alignItems="center">
        {adornament ? (
          <Box display="flex" alignItems="center">
            {adornament}
          </Box>
        ) : (
          <></>
        )}
        <IntegerField
          {...props}
          inputProps={{ onInput }}
          value={String(value)}
          sx={{ mb: 0 }}
        />
      </Box>
      <Button
        sx={styles}
        onClick={() => setValue((prev) => String(Number(prev) + 1))}
      >
        +
      </Button>
    </Box>
  );
}

type Props = TextFieldProps & { adornament?: ReactNode };

const styles: SxProps = {
  bgcolor: '#615a4b',
  height: '28px',
  minWidth: '28px',
  color: 'white',
};
