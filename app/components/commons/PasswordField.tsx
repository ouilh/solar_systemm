import React, { ChangeEvent, useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordFieldProps {
    setPassword: (password: string) => void
}

function PasswordField({ setPassword }: PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const passwordValue: string = event.target.value;
        setPassword(passwordValue);
    };

    return (
        <TextField
            type={showPassword ? 'text' : 'password'}
            label="Password"
            onChange={handlePasswordChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default PasswordField;
