import { DynamicFile } from "./DynamicFile";

const dynamicFile = new DynamicFile('src/components/Nav.tsx');
// dynamicFile.addStringBlockBeforeMarker('</ul>', 'test line');
dynamicFile.debug();
