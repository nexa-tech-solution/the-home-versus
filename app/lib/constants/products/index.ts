import { DYSON_V15_PRODUCT } from "./dyson-v15";
import { SingleProductData } from "../types";

export const PRODUCT_DATA: Record<string, SingleProductData> = {
  "dyson-v15-detect": DYSON_V15_PRODUCT,
};

export * from "./dyson-v15";
