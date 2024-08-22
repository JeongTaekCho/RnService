import TanstackQueryProvider from '@/app/shared/components/provider/TanstackQueryProvider';
import { ReactNode } from 'react';

interface RootLayoutProviderProps {
  children: ReactNode;
}

export default function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
}
