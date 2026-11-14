export type Case = {
  _id: string;
  title: string;
  summary: string;
  category: string;
  role: string;
  period: string;
  challenge: string;
  process: { title: string; text: string }[];
  tools: string[];
  result: string;
  coverUrl?: string;
};
