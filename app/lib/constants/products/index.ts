import { DYSON_V15_PRODUCT } from "./dyson-v15";
import { SHARK_STRATOS_PRODUCT } from "./shark-stratos";
import { TINECO_S5_PRODUCT } from "./tineco-s5";
import { NINJA_IG651_PRODUCT } from "./ninja-foodi";
import { NINJA_FOODI_OVEN_PRODUCT } from "./ninja-foodi-oven";
import { INSTANT_POT_PRO_CRISP_PRODUCT } from "./instant-pot-pro-crisp";
import { PETLIBRO_AIR_PRODUCT } from "./litter-robot-4";

import { UPPABABY_VISTA_V2_PRODUCT } from "./uppababy-vista-v2";
import { UPPABABY_VISTA_V3_PRODUCT } from "./uppababy-vista-v3";
import { SingleProductData } from "../types";

export const PRODUCT_DATA: Record<string, SingleProductData> = {
  "dyson-v15-detect": DYSON_V15_PRODUCT,
  "shark-stratos": SHARK_STRATOS_PRODUCT,
  "tineco-floor-one-s5": TINECO_S5_PRODUCT,
  "ninja-ig651-smart-xl-pro-grill-griddle": NINJA_IG651_PRODUCT,
  "ninja-foodi-smart-xl": NINJA_FOODI_OVEN_PRODUCT,
  "instant-pot-pro-crisp": INSTANT_POT_PRO_CRISP_PRODUCT,
  "petlibro-air-automatic": PETLIBRO_AIR_PRODUCT,

  "uppababy-vista-v2": UPPABABY_VISTA_V2_PRODUCT,
  "uppababy-vista-v3": UPPABABY_VISTA_V3_PRODUCT,
};

export * from "./dyson-v15";
export * from "./shark-stratos";
export * from "./tineco-s5";
export * from "./ninja-foodi";
export * from "./ninja-foodi-oven";
export * from "./instant-pot-pro-crisp";
export * from "./litter-robot-4";

export * from "./uppababy-vista-v2";
export * from "./uppababy-vista-v3";
