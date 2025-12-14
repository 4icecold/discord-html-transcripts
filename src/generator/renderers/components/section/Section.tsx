import React from 'react';
import type { ButtonComponent, ThumbnailComponent } from 'discord.js';
import { Component } from '../../components';

interface DiscordSectionProps {
  children: React.ReactNode;
  accessory?: ButtonComponent | ThumbnailComponent;
  id: number;
}

function DiscordSection({ children, accessory, id }: DiscordSectionProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '16px',
        width: '100%',
      }}
    >
      {/* Content area - takes remaining space */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          minWidth: 0,
        }}
      >
        {children}
      </div>
      {/* Accessory area - fixed width on right */}
      {accessory && (
        <div
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Component component={accessory} id={id} />
        </div>
      )}
    </div>
  );
}

export default DiscordSection;
