import { type SchemaTypeDefinition } from "sanity";
import { serviceCard } from "./schemas/serviceCard";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [serviceCard],
};
