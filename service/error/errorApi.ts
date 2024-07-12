import { Messages } from "@/enum/enums";
import { ErrorApi } from "@/types/errorApiType";
import { clearStorageBrowser } from "@/utils/routers";
import axios from "axios";

export const handleApiError = (error: any) => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            const errorResponse = new Error() as ErrorApi;
            errorResponse.statusCode = error.response.status;
            errorResponse.error = error.response.data.error;
            errorResponse.message = error.response.data.message;

            if (errorResponse.statusCode === 401) {
                clearStorageBrowser();
            }

            return Promise.reject(errorResponse);
        }
    }

    const internalError = new Error(Messages.UNEXPECTED_ERROR) as ErrorApi;
    internalError.statusCode = 500;
    internalError.error = "Erro Interno";
    internalError.message = Messages.UNEXPECTED_ERROR;
    return Promise.reject(internalError);
};
