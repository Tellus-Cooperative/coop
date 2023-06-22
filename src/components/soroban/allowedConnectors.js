import {ConnectorList } from '@soroban-react/types';
import { freighter } from '@soroban-react/freighter';
import { allowedChains as chains } from './allowedChains';

const appName = "My dApp"
export const allowedConnectors = [
    {
      groupName: 'My Group Name',
      connectors: [freighter({ appName, chains })],
    },
  ];