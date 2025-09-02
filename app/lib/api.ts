import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";

const defaultOptions: CreateAxiosDefaults = {
  baseURL: process.env.API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

const http: AxiosInstance = axios.create(defaultOptions);

http.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error("API Error: ", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const request = {
  get: <T>(url: string) => http.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    http.post<T>(url, body).then(responseBody),
};

const article = {
  findMany: async () => {},
  findBy: async (id: number) => {},
  findManyWith: async ({
    where: { categoryId },
    limit = 10,
  }: {
    where: { categoryId: number };
    limit?: number;
  }) => {},
};

export { article };
