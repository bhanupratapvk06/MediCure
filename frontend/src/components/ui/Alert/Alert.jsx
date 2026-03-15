import React from 'react';
import { useTheme } from '../../../theme';
import { XCircleIcon, CheckCircleIcon, AlertTriangleIcon, InfoIcon } from 'lucide-react';

const Alert = ({
  children,
  type = 'info',
  dismissible = false,
  onDismiss,
  className = '',
  ...props
}) => {
  const { colors, borderRadius, spacing, typography } = useTheme();

  const typeStyles = {
    success: {
      backgroundColor: colors.success[50],
      borderColor: colors.success[200],
      textColor: colors.success[700],
      iconColor: colors.success[500],
    },
    warning: {
      backgroundColor: colors.warning[50],
      borderColor: colors.warning[200],
      textColor: colors.warning[700],
      iconColor: colors.warning[500],
    },
    error: {
      backgroundColor: colors.error[50],
      borderColor: colors.error[200],
      textColor: colors.error[700],
      iconColor: colors.error[500],
    },
    info: {
      backgroundColor: colors.primary[50],
      borderColor: colors.primary[200],
      textColor: colors.primary[900],
      iconColor: colors.primary[500],
    },
  };

  const IconMap = {
    success: CheckCircleIcon,
    warning: AlertTriangleIcon,
    error: XCircleIcon,
    info: InfoIcon,
  };

  const IconComponent = IconMap[type] || InfoIcon;

  const styles = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: spacing[3],
    padding: spacing[4],
    borderRadius: borderRadius.lg,
    border: `1px solid ${typeStyles[type].borderColor}`,
    backgroundColor: typeStyles[type].backgroundColor,
    color: typeStyles[type].textColor,
    fontSize: typography.fontSize.sm[0],
    lineHeight: typography.fontSize.sm[1].lineHeight,
    position: 'relative',
  };

  return (
    <div
      style={styles}
      role="alert"
      aria-live="polite"
      className={className}
      {...props}
    >
      <IconComponent
        size={20}
        style={{ color: typeStyles[type].iconColor, flexShrink: 0, marginTop: '2px' }}
        aria-hidden="true"
      />
      <div style={{ flex: 1 }}>{children}</div>
      {dismissible && (
        <button
          type="button"
          onClick={onDismiss}
          style={{
            background: 'none',
            border: 'none',
            padding: spacing[1],
            cursor: 'pointer',
            color: typeStyles[type].iconColor,
            display: 'flex',
            borderRadius: borderRadius.md,
          }}
          aria-label="Dismiss alert"
        >
          <XCircleIcon size={18} />
        </button>
      )}
    </div>
  );
};

export default Alert;
