// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-purple-950 border-purple-950

import { PRODUCT_PRICES } from "@/lib/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "Purple", value: "purple", tw: "purple-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone 12 pro",
      value: "iphone12pro",
    },

    {
      label: "iPhone 13 pro",
      value: "iphone13pro",
    },
    {
      label: "iPhone 14 pro",
      value: "iphone14pro",
    },
    {
      label: "iPhone 15 pro",
      value: "iphone15pro",
    },
    {
      label: "iPhone 16 pro",
      value: "iphone16pro",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
    {
      label: "Titanium",
      value: "titanium",
      description: "Corrosion resistance",
      price: PRODUCT_PRICES.material.titanium,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
    {
      label: "Carbon fiber Finish",
      value: "carbonfiber",
      description: "Woven,textured pattern",
      price: PRODUCT_PRICES.finish.carbonfiber,
    },
  ],
} as const;
