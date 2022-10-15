export type Project = {
  status: "all" | "green" | "yellow" | "red";
  sort_by_name: "-" | "beginning" | "end";
};
export type Token = "all" | "TRST" | "THT" | "THC";
export type Conditions = "all" | "x2,6 months" | "x2,1 year" | "x4,2 years";
export type Volume = "descending" | "ascending";

export type FilterType = {
  project: Project;
  token: Token;
  conditions: Conditions;
  volume: Volume;
};
