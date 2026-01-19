export type Product = {
      id: string;
      parent_id: string | null;
      name: string;
      description: string;
      status: "ACTIVE" | "INACTIVE";
      created_at: number;
      updated_at: number | null;
};
