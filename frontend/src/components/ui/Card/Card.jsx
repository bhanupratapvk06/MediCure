import React from 'react';
import { useTheme } from '../../../theme';

const Card = ({
  children,
  variant = 'elevated',
  padding = 'md',
  className = '',
  ...props
}) => {
  const { colors, borderRadius, shadows, spacing } = useTheme();

  const paddingMap = {
    none: 0,
    sm: spacing[3],
    md: spacing[4],
    lg: spacing[6],
    xl: spacing[8],
  };

  const variantStyles = {
    elevated: {
      backgroundColor: colors.surface.primary,
      boxShadow: shadows.md,
      border: 'none',
    },
    outlined: {
      backgroundColor: colors.surface.primary,
      boxShadow: 'none',
      border: `1px solid ${colors.neutral[200]}`,
    },
    filled: {
      backgroundColor: colors.surface.secondary,
      boxShadow: 'none',
      border: 'none',
    },
  };

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: variantStyles[variant].backgroundColor,
    borderRadius: borderRadius.lg,
    border: variantStyles[variant].border,
    boxShadow: variantStyles[variant].boxShadow,
    padding: paddingMap[padding],
    overflow: 'hidden',
  };

  return (
    <div style={styles} className={className} {...props}>
      {children}
    </div>
  );
};

Card.Header = ({ children, className = '', ...props }) => {
  const { typography, colors, spacing } = useTheme();

  return (
    <div
      style={{
        ...typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
        color: colors.neutral[800],
        marginBottom: spacing[3],
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Body = ({ children, className = '', ...props }) => {
  return (
    <div className={className} style={{ flex: 1 }} {...props}>
      {children}
    </div>
  );
};

Card.Footer = ({ children, className = '', ...props }) => {
  const { spacing, colors } = useTheme();

  return (
    <div
      style={{
        marginTop: spacing[4],
        paddingTop: spacing[4],
        borderTop: `1px solid ${colors.neutral[200]}`,
        display: 'flex',
        alignItems: 'center',
        gap: spacing[3],
      }}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
