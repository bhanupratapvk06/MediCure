import React, { forwardRef, useState, useId } from 'react';
import { useTheme } from '../../../theme';

const Select = forwardRef(
  (
    {
      label,
      error,
      helperText,
      children,
      required = false,
      disabled = false,
      value,
      onChange,
      onBlur,
      id,
      className = '',
      ...props
    },
    ref
  ) => {
    const { colors, borderRadius, spacing, typography } = useTheme();
    const [focused, setFocused] = useState(false);
    const [hovered, setHovered] = useState(false);
    const generatedId = useId();
    const selectId = id || `select-${generatedId}`;

    const selectStyles = {
      width: '100%',
      padding: spacing[3],
      fontSize: typography.fontSize.base[0],
      lineHeight: typography.fontSize.base[1].lineHeight,
      color: colors.neutral[800],
      backgroundColor: disabled ? colors.neutral[100] : colors.surface.primary,
      border: `1px solid ${error ? colors.error[400] : focused ? colors.primary[500] : hovered ? colors.neutral[400] : colors.neutral[300]}`,
      borderRadius: borderRadius.lg,
      boxShadow: focused && !error ? `0 0 0 3px ${colors.primary[100]}` : 'none',
      transition: 'border-color 150ms ease, box-shadow 150ms ease',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    };

    const labelStyles = {
      display: 'block',
      marginBottom: spacing[2],
      fontSize: typography.fontSize.sm[0],
      fontWeight: typography.fontWeight.medium,
      color: colors.neutral[700],
    };

    const errorStyles = {
      fontSize: typography.fontSize.xs[0],
      color: colors.error[500],
      marginTop: spacing[1],
    };

    const helperStyles = {
      fontSize: typography.fontSize.xs[0],
      color: colors.neutral[500],
      marginTop: spacing[1],
    };

    return (
      <div style={{ width: '100%' }} className={className}>
        {label && (
          <label htmlFor={selectId} style={labelStyles}>
            {label}
            {required && (
              <span style={{ color: colors.error[500], marginLeft: spacing[1] }}>*</span>
            )}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          onFocus={() => setFocused(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          disabled={disabled}
          required={required}
          style={selectStyles}
          aria-invalid={!!error}
          aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
          {...props}
        >
          {children}
        </select>
        {error && (
          <div id={`${selectId}-error`} style={errorStyles} role="alert">
            {error}
          </div>
        )}
        {helperText && !error && (
          <div id={`${selectId}-helper`} style={helperStyles}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
