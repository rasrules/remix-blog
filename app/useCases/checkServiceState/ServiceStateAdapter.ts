import { checkNotionServiceState } from "./NotionServiceState";

export function createServiceStateAdapter(options?: {
  create(): Promise<Response>;
}) {
  const create = options?.create ?? checkNotionServiceState;

  return () => create();
}
