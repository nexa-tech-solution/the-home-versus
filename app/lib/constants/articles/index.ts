import * as Cleaning from "./cleaning";
import * as Kitchen from "./kitchen";
import * as BabyKids from "./baby-kids";
import * as Pets from "./pets";
import { ArticleData } from "../types";

export const ARTICLE_DATA: Record<string, ArticleData> = {
  "dyson-v15-vs-shark-stratos": Cleaning.DYSON_V15_VS_SHARK_STRATOS,
  "tineco-floor-one-s5-vs-roborock-flexi-pro": Cleaning.TINECO_S5_VS_ROBOROCK_FLEXI_PRO,
  "ninja-foodi-smart-xl-vs-instant-pot-pro-crisp": Kitchen.NINJA_FOODI_VS_INSTANT_POT,
  "ninja-foodi-grill-vs-oven": Kitchen.NINJA_GRILL_VS_OVEN,
  "uppababy-vista-v3-vs-graco-ready2grow-lx-2-0": BabyKids.UPPABABY_VS_GRACO,
  "pampers-sensitive-vs-huggies-natural-care-wipes": BabyKids.PAMPERS_VS_HUGGIES_WIPES,
  "litter-robot-4-vs-petlibro-air": Pets.LITTER_ROBOT_VS_PETLIBRO,
  "roborock-flexi-pro-vs-dyson-v15-detect": Cleaning.ROBOROCK_VS_DYSON,
  "the-pink-stuff-vs-multipurpose-sprays": Cleaning.PINK_STUFF_VS_SPRAYS,
};

export * from "./cleaning";
export * from "./kitchen";
export * from "./baby-kids";
export * from "./pets";
