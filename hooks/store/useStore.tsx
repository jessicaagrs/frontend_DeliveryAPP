import { getStores } from "@/service/store/storeApi";
import { useQuery } from "@tanstack/react-query";

export default function useStore() {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["stores"],
        queryFn: getStores,
    });

    return { isPending, isError, data: data?.data, error };
}
