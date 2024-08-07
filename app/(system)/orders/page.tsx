'use client';

import { HeaderTable } from "@/components/ui/table/HeaderTable";
import Table from "@/components/ui/table/Table";
import { columnsOrdersCustomer } from "@/data/table/columnsTable";
import useOrdersByCustomer from "@/hooks/order/useOrdersByCustomer"

export default function Orders() {
    const {data, error, isError, isPending} = useOrdersByCustomer();

    if (isPending) {
        return <div>Aguarde carregando os pedidos...</div>;
    }

    if (isError) {
        return <div>{error?.message}</div>;
    }

    if (!data) {
        return <div>Não há pedidos nessa loja.</div>;
    }

    return (
        <main>
            <HeaderTable title="Pedidos" description="Lista de todos pedidos realizados nessa loja." isNewRecord={false} />
            <Table data={data} isEdit={false} titleColumns={columnsOrdersCustomer}/>
        </main>
    )
};