import React, { useState } from 'react';
import { useTheme } from '../../../theme';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button',
  onClick,
  className = '',
  ...props
}) => {
  const { colors, borderRadius, shadows, spacing, typography } = useTheme();
  const [hovered, setHovered] = useState(false);

  const variantStyles = {
    primary: {
      background: hovered ? colors.primary[600] : colors.primary[500],
      color: '#ffffff',
      border: 'none',
    },
    secondary: {
      background: hovered ? colors.neutral[200] : colors.neutral[100],
      color: colors.neutral[700],
      border: `1px solid ${colors.neutral[200]}`,
    },
    outline: {
      background: hovered ? colors.primary[50] : 'transparent',
      color: colors.primary[500],
      border: `2px solid ${colors.primary[500]}`,
    },
    ghost: {
      background: hovered ? colors.neutral[100] : 'transparent',
      color: colors.neutral[700],
      border: 'none',
    },
  };

  const sizeStyles = {
    sm: {
      padding: `${typography.fontSize.xs[0]} ${spacing[4]}`,
      fontSize: typography.fontSize.sm[0],
    },
    md: {
      padding: `${spacing[2]} ${spacing[6]}`,
      fontSize: typography.fontSize.base[0],
    },
    lg: {
      padding: `${spacing[3]} ${spacing[8]}`,
      fontSize: typography.fontSize.lg[0],
    },
    xl: {
      padding: `${spacing[4]} ${spacing[10]}`,
      fontSize: typography.fontSize.xl[0],
    },
  };

  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[2],
    fontWeight: typography.fontWeight.semibold,
    borderRadius: borderRadius.full,
    border: '1px solid transparent',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    position: 'relative',
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={styles}
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {loading && (
        <Spinner size="sm" color={variant === 'primary' ? '#ffffff' : colors.primary[500]} />
      )}
      {children}
    </button>
  );
};

const Spinner = ({ size = 'sm', color = '#000000' }) => {
  const sizeMap = {
    sm: '16px',
    md: '24px',
    lg: '32px',
  };

  return (
    <svg
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24"
      fill="none"
      style={{ animation: 'spin 1s linear infinite' }}
    >
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="10"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
};

export default Button;
