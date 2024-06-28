import { BoxItemsLoading, ContainerLoading } from "./Loading.styles";

interface Loading {

};

type LoadingProps = {

};

export default function Loading() {
    return (
        <ContainerLoading>
            <BoxItemsLoading>
                <div></div>
                <div></div>
                <div></div>
            </BoxItemsLoading>
        </ContainerLoading>
    )
};