import { createServiceStateAdapter } from "../../adapter/servicestate/ServiceStateAdapter";

export const checkServiceStatus = async (
  param: { create(): Promise<Response> } | undefined,
) => {
  const checkServiceState = createServiceStateAdapter(param);
  return await checkServiceState();
};
