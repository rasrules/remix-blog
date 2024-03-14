import { createServiceStateAdapter } from "../useCases/checkServiceState/ServiceStateAdapter";

export const loader = async (
  param: { create(): Promise<Response> } | undefined,
) => {
  const checkServiceStatus = createServiceStateAdapter(param);
  return await checkServiceStatus();
};
