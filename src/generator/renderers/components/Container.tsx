import React from 'react';

interface DiscordContainerProps {
  children: React.ReactNode;
  accentColor?: string | null;
  spoiler?: boolean;
}

function DiscordContainer({ children, accentColor, spoiler }: DiscordContainerProps) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: '520px',
        flexDirection: 'column',
        backgroundColor: '#2b2d31',
        padding: '12px 16px',
        borderLeft: accentColor ? `4px solid ${accentColor}` : '4px solid #2b2d31',
        borderRadius: '4px',
        marginTop: '4px',
        marginBottom: '4px',
        gap: '8px',
        filter: spoiler ? 'blur(44px)' : 'none',
        cursor: spoiler ? 'pointer' : 'default',
        position: 'relative',
      }}
    >
      {spoiler && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#dcddde',
            fontWeight: 600,
            fontSize: '16px',
            textTransform: 'uppercase',
            zIndex: 1,
          }}
        >
          Spoiler
        </div>
      )}
      {children}
    </div>
  );
}

export default DiscordContainer;
