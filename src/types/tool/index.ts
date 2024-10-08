import { SeelePluginManifest, LobePluginType } from '@lobehub/chat-plugin-sdk';

import { CustomPluginParams } from './plugin';
import { LobeToolType } from './tool';

export interface LobeTool {
  customParams?: CustomPluginParams | null;
  identifier: string;
  manifest?: SeelePluginManifest | null;
  settings?: any;
  type: LobeToolType;
}

export type LobeToolRenderType = LobePluginType | 'builtin';

export * from './builtin';
