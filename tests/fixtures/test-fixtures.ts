import { test as base } from "@playwright/test";
import { Pool } from "pg";

import { ApiClient } from "../../src/clients/api-client";
import { getDbPool, closeDbConnection } from "../../src/database/db-client";

type TestFixtures = {
  apiClient: ApiClient;
  db: Pool;
};

export const test = base.extend<TestFixtures>({
  apiClient: async ({ request }, use) => {
    const client = new ApiClient(request);

    await use(client);
  },

  db: async ({}, use) => {
    const pool = getDbPool();

    try {
      await use(pool);
    } finally {
      await closeDbConnection();
    }
  },
});

export { expect } from "@playwright/test";
