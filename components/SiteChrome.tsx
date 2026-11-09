'use client';

import { useState, type ReactNode } from 'react';
import { Navbar, Footer, AuthDialog, PartnerDialog, Dialog } from './Marketplace';

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<{ type: 'auth' | 'partner' | 'info'; title?: string } | null>(null);
  const close = () => setModal(null);
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Navbar onAuth={mode => setModal({ type: 'auth', title: mode })} onPartner={() => setModal({ type: 'partner' })} />
    {children}
    <Footer
      onInfo={title => setModal({ type: 'info', title })}
    />
    {modal?.type === 'auth' && <AuthDialog mode={modal.title || 'Login'} onClose={close} />}
    {modal?.type === 'partner' && <PartnerDialog onClose={close} />}
    {modal?.type === 'info' && <Dialog title={modal.title || 'ZEROTHAM'} onClose={close}>
      <p>{modal.title === 'Careers' ? 'Open roles and application details will be published when available.' : `ZEROTHAM’s official ${modal.title} profile will be linked here when available.`}</p>
      <button className="button" onClick={close}>Close</button>
    </Dialog>}
  </>;
}
