export interface ErrorApi extends Error {
	statusCode: number;
	error: string;
	message: string;
}
