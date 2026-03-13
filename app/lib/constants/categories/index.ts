import { CLEANING_CATEGORY } from "./cleaning";
import { KITCHEN_CATEGORY } from "./kitchen";
import { BABY_KIDS_CATEGORY } from "./baby-kids";
import { PETS_CATEGORY } from "./pets";
import { Category } from "../types";

export const RAW_CATEGORIES: Category[] = [
  CLEANING_CATEGORY,
  KITCHEN_CATEGORY,
  BABY_KIDS_CATEGORY,
  PETS_CATEGORY,
];

export * from "./cleaning";
export * from "./kitchen";
export * from "./baby-kids";
export * from "./pets";
