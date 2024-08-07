type ColumnsTable = {
    id: number;
    title: string;
    propName: string;
};

type TableProps = {
    titleColumns: ColumnsTable[];
    data: any[];
    isEdit: boolean;
};

export default function Table({ titleColumns, data, isEdit }: TableProps) {
    return (
        <table>
            <thead>
                <tr>
                    {titleColumns.map(title => (
                        <th key={title.id}>{title.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex + 1}>
                        {titleColumns.map(col => (
                            <td key={col.id}>{row[col.propName]}</td>
                        ))}
                    </tr>
                ))}
                {isEdit && (
                    <tr>
                        <td colSpan={titleColumns.length}>Modo de Edição Ativo</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
