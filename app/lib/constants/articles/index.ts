import * as Pets from "./pets";
import * as Cleaning from "./cleaning";
import * as Kitchen from "./kitchen";
import * as BabyKids from "./baby-kids";
import { ArticleData } from "../types";

export const ARTICLE_DATA: Record<string, ArticleData> = {
  "dyson-v15-vs-shark-stratos": Cleaning.DYSON_V15_VS_SHARK_STRATOS,
  "litter-robot-4-vs-petkit-pura-max": Pets.LITTER_ROBOT_4_VS_PURAMAX,
  "tineco-floor-one-s5-vs-roborock-dyad-pro": Cleaning.TINECO_S5_VS_ROBOROCK_DYAD_PRO,
  "ninja-foodi-vs-instant-pot-pro-crisp": Kitchen.NINJA_FOODI_VS_INSTANT_POT,
  "uppababy-vista-v2-vs-nuna-demi-grow": BabyKids.UPPABABY_VS_NUNA,
};

export * from "./pets";
export * from "./cleaning";
export * from "./kitchen";
export * from "./baby-kids";
