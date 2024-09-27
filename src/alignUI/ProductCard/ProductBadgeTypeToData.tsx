import {BadgeColor} from "../Badges/Badge";

export const productBadgeTypeToData: Record<
  string,
  { title: string; color: BadgeColor }
> = {
  bestseller: { title: "Bestseller", color: "purple" },
  on_sale: { title: "On Sale", color: "pink" },
  new_in: { title: "New In", color: "blue" },
  slow_mover: { title: "Slow Mover", color: "yellow" },
  out_of_stock: { title: "Out of Stock", color: "gray" },
  few_variants_available: { title: "Low stock", color: "orange" },
};
