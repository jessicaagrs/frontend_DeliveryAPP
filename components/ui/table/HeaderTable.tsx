import {
    ButtonAdd,
    ButtonDownload,
    Divisor,
    Header,
    HeaderButtonsContainer,
    HeaderContainer,
    HeaderTextContainer,
} from "./HeaderTable.styles";

type HeaderTableProps = {
    title: string;
    description: string;
    handleClick?: () => void;
    isNewRecord: boolean;
};

export const HeaderTable = ({ title, description, isNewRecord, handleClick }: HeaderTableProps) => {
    return (
        <Header>
            <HeaderContainer>
                <HeaderTextContainer>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </HeaderTextContainer>
                <HeaderButtonsContainer>
                    {isNewRecord && <ButtonAdd>+ Novo</ButtonAdd>}
                    <ButtonDownload onClick={handleClick}>Download PDF Relatório</ButtonDownload>
                </HeaderButtonsContainer>
            </HeaderContainer>
            <Divisor />
        </Header>
    );
};
