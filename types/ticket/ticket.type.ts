export type Ticket = {
      id: string;
      account_id: string;
      code: string;
      reference_code: string;
      reference_type: string;
      description: string;
      status: string;
      createdAt: string;
      updatedAt: string;
      category: {
            id: string;
            parent_id: string;
            name: string;
            description: string;
            status: string;
            createdAt: string;
            updatedAt: string;
      };
      user: {
            id: string;
            username: string;
            name: string;
      };
};
