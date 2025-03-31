import Notification from "./methods";
import { withInstallFunction } from "@ee-ui/utils";

export const ErNotification = withInstallFunction(Notification, "$notify");

export * from "./types";
