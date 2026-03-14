import * as Cleaning from "./cleaning";
import * as Kitchen from "./kitchen";
import * as BabyKids from "./baby-kids";
import * as Pets from "./pets";
import { ArticleData } from "../types";

export const ARTICLE_DATA: Record<string, ArticleData> = {
  "dyson-v15-vs-shark-stratos": Cleaning.DYSON_V15_VS_SHARK_STRATOS,
  "tineco-floor-one-s5-vs-roborock-flexi-pro": Cleaning.TINECO_S5_VS_ROBOROCK_FLEXI_PRO,
  "ninja-foodi-vs-instant-pot-pro-crisp": Kitchen.NINJA_FOODI_VS_INSTANT_POT,
  "uppababy-vista-v3-vs-graco-ready2grow-lx-2-0": BabyKids.UPPABABY_VS_GRACO,
  "litter-robot-4-vs-petlibro-air": Pets.LITTER_ROBOT_VS_PETLIBRO,
};

export * from "./cleaning";
export * from "./kitchen";
export * from "./baby-kids";
export * from "./pets";
