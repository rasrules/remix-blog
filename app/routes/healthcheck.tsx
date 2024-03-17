import { checkServiceStatus } from "../useCases/checkServiceState";

export const loader = async (
  param: { create(): Promise<Response> } | undefined,
) => {
  return await checkServiceStatus(param);
};
