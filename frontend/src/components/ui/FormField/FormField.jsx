import React from 'react';
import { useTheme } from '../../../theme';
import Input from '../Input';

const FormField = ({
  name,
  label,
  type = 'text',
  placeholder,
  required = false,
  disabled = false,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  children,
  ...props
}) => {
  const { spacing, typography } = useTheme();

  const fieldStyles = {
    marginBottom: spacing[5],
  };

  const labelStyles = {
    display: 'block',
    marginBottom: spacing[2],
    fontSize: typography.fontSize.sm[0],
    fontWeight: typography.fontWeight.medium,
    color: '#334155', // neutral-700 from tokens
  };

  // If children provided, use that (for Select, custom inputs)
  // Otherwise use Input component
  const renderInput = () => {
    if (children) {
      return (
        <>
          {label && (
            <label style={labelStyles}>
              {label}
              {required && (
                <span style={{ color: '#ef4444', marginLeft: spacing[1] }}>*</span>
              )}
            </label>
          )}
          {children}
        </>
      );
    }

    return (
      <Input
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        {...props}
      />
    );
  };

  return <div style={fieldStyles}>{renderInput()}</div>;
};

export default FormField;
