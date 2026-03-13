import { DYSON_V15_PRODUCT } from "./dyson-v15";
import { SHARK_STRATOS_PRODUCT } from "./shark-stratos";
import { TINECO_S5_PRODUCT } from "./tineco-s5";
import { ROBOROCK_DYAD_PRO_PRODUCT } from "./roborock-dyad-pro";
import { NINJA_FOODI_PRODUCT } from "./ninja-foodi";
import { INSTANT_POT_PRO_CRISP_PRODUCT } from "./instant-pot-pro-crisp";
import { LITTER_ROBOT_4_PRODUCT } from "./litter-robot-4";
import { PETKIT_PURA_MAX_PRODUCT } from "./petkit-pura-max";
import { UPPABABY_VISTA_V2_PRODUCT } from "./uppababy-vista-v2";
import { NUNA_DEMI_GROW_PRODUCT } from "./nuna-demi-grow";
import { SingleProductData } from "../types";

export const PRODUCT_DATA: Record<string, SingleProductData> = {
  "dyson-v15-detect": DYSON_V15_PRODUCT,
  "shark-stratos": SHARK_STRATOS_PRODUCT,
  "tineco-floor-one-s5": TINECO_S5_PRODUCT,
  "roborock-dyad-pro": ROBOROCK_DYAD_PRO_PRODUCT,
  "ninja-foodi-smart-xl": NINJA_FOODI_PRODUCT,
  "instant-pot-pro-crisp": INSTANT_POT_PRO_CRISP_PRODUCT,
  "litter-robot-4": LITTER_ROBOT_4_PRODUCT,
  "petkit-pura-max": PETKIT_PURA_MAX_PRODUCT,
  "uppababy-vista-v2": UPPABABY_VISTA_V2_PRODUCT,
  "nuna-demi-grow": NUNA_DEMI_GROW_PRODUCT,
};

export * from "./dyson-v15";
export * from "./shark-stratos";
export * from "./tineco-s5";
export * from "./roborock-dyad-pro";
export * from "./ninja-foodi";
export * from "./instant-pot-pro-crisp";
export * from "./litter-robot-4";
export * from "./petkit-pura-max";
export * from "./uppababy-vista-v2";
export * from "./nuna-demi-grow";
