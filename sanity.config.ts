import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "portfolio",
  title: "Портфолио Максима Вертезе",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
