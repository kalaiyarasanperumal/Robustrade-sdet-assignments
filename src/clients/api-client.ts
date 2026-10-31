import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiClient {
  constructor(private readonly request: APIRequestContext) {}

  async get(endpoint: string): Promise<APIResponse> {
    return await this.request.get(endpoint);
  }

  async post(endpoint: string, payload: unknown): Promise<APIResponse> {
    return await this.request.post(endpoint, {
      data: payload,
    });
  }

  async put(endpoint: string, payload: unknown): Promise<APIResponse> {
    return await this.request.put(endpoint, {
      data: payload,
    });
  }

  async patch(endpoint: string, payload: unknown): Promise<APIResponse> {
    return await this.request.patch(endpoint, {
      data: payload,
    });
  }

  async delete(endpoint: string): Promise<APIResponse> {
    return await this.request.delete(endpoint);
  }
}
