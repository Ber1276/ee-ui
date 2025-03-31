import Message from "./methods";
import { withInstallFunction } from "@ee-ui/utils";

export const ErMessage = withInstallFunction(Message, "$message");

export * from "./types";
