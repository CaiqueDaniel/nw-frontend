import { TextField, TextFieldProps } from '@mui/material';

export function IntegerField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      type="tel"
      inputProps={{
        step: 1,
        ...props.inputProps,
        onInput: (e: React.FormEvent<HTMLInputElement>) => {
          const input = e.currentTarget;
          input.value = input.value.replace(/[^-?\d]/g, '');
          if (
            props.inputProps &&
            typeof props.inputProps.onInput === 'function'
          ) {
            props.inputProps.onInput(e);
          }
        },
      }}
    />
  );
}
