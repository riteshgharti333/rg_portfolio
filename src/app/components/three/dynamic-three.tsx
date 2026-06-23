import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

export default function dynamicThree<P extends object>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
) {
  return dynamic(importFn, {
    ssr: false,
    loading: () => <LoadingFallback />,
  });
}

function LoadingFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          border: '3px solid rgba(255,255,255,0.1)',
          borderTopColor: '#fff',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}