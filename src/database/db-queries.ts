
import {
  QueryResult,
  QueryResultRow
} from "pg";

import { getDbPool } from "./db-client";

export async function executeQuery<T extends QueryResultRow>(
  sql: string,
  values: unknown[] = []
): Promise<QueryResult<T>> {
  try {
    const result = await getDbPool().query<T>(sql, values);

    return result;
  } catch (error) {
    console.error("Database query execution failed:", error);
    throw error;
  }
}
