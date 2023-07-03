import { INetworkHttpJsonInput } from './jsonInput'

export interface INetworkHttpInput<Body> extends Omit<INetworkHttpJsonInput<Body>, 'method'> { }