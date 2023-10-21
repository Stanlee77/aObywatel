import TextField from '@mui/material/TextField';

function BaseInput(props: {
    size?: 'small' | 'medium'
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void
} & Record<string, any>) {
    return <TextField {...props} onInput={props.onInput} variant="outlined" size={props.size}  />;
}

export default BaseInput;