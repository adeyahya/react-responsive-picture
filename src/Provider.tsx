import React from 'react';
import { Resolver } from './types';
import defaultResolver from './defaultResolver';

export interface IProvider {
  resolver: Record<string, Resolver>;
}

export interface ProviderProps {
  resolver?: Record<string, Resolver>;
}

export const ContextProvider = React.createContext<IProvider>(null!);

const Provider: React.FC<ProviderProps> = props => {
  return (
    <ContextProvider.Provider value={{ resolver: defaultResolver }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

Provider.defaultProps = {
  resolver: {},
};

export default Provider;
