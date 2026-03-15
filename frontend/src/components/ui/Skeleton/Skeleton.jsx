import React from 'react';
import { useTheme } from '../../../theme';

const Skeleton = ({
  width = '100%',
  height = '1rem',
  variant = 'text',
  count = 1,
  className = '',
  ...props
}) => {
  const { colors, borderRadius, animations } = useTheme();

  const baseStyles = {
    backgroundColor: colors.neutral[200],
    borderRadius: variant === 'circular' ? borderRadius.full : borderRadius.md,
  };

  if (variant === 'text') {
    return (
      <div
        className={className}
        style={{
          ...baseStyles,
          height,
          width: width === '100%' ? '100%' : width,
          marginBottom: '0.5rem',
        }}
        aria-hidden="true"
        {...props}
      />
    );
  }

  if (variant === 'circular') {
    return (
      <div
        className={className}
        style={{
          ...baseStyles,
          width: width === '100%' ? '100%' : width,
          height: height,
          flexShrink: 0,
        }}
        aria-hidden="true"
        {...props}
      />
    );
  }

  return (
    <div
      className={className}
      style={{
        ...baseStyles,
        width,
        height,
      }}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Skeleton;
