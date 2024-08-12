import { SeelePluginManifest, Meta } from '@lobehub/chat-plugin-sdk';

import { LobeToolType } from './tool';

export type PluginManifestMap = Record<string, SeelePluginManifest>;

export interface CustomPluginParams {
  apiMode?: 'openapi' | 'simple';
  enableSettings?: boolean;
  manifestMode?: 'local' | 'url';
  manifestUrl?: string;
  useProxy?: boolean;
}

export interface LobeToolCustomPlugin {
  customParams?: CustomPluginParams;
  identifier: string;
  manifest?: SeelePluginManifest;
  settings?: any;
  type: 'customPlugin';
}

export interface InstallPluginMeta {
  author?: string;
  createdAt?: string;
  homepage?: string;
  identifier: string;
  meta?: Meta;
  type: LobeToolType;
}

export interface PluginInstallError {
  cause?: string;
  message: 'noManifest' | 'fetchError' | 'manifestInvalid' | 'urlError';
}
