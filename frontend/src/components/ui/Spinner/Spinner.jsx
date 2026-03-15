import React from 'react';
import { useTheme } from '../../../theme';

const Spinner = ({
  size = 'md',
  color,
  thickness = 3,
  className = '',
  ...props
}) => {
  const { colors } = useTheme();

  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 32,
    xl: 48,
  };

  const spinnerSize = sizeMap[size] || sizeMap.md;
  const spinnerColor = color || colors.primary[500];

  return (
    <svg
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
      role="progressbar"
      aria-label="Loading"
      style={{ animation: 'spin 1s linear infinite' }}
      className={className}
      {...props}
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
        stroke={spinnerColor}
        strokeWidth={thickness}
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="10"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
};

export default Spinner;
