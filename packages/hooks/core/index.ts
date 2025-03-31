import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import makeInstaller from "./makeInstaller";
import componens from "./componens";
import printLogo from "./pringLogo";

import "@ee-ui/theme/index.css";

printLogo();

library.add(fas);
const installer = makeInstaller(componens);

export * from "@ee-ui/locale";
export * from "@ee-ui/components";
export default installer;
