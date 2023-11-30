function RightPanelComponent({ object, getObjectContent }) {
    const tableBodyRows = getObjectContent(object, true);

    return (
        <div className="right-panel">
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    { tableBodyRows }
                </tbody>
            </table>
        </div>
    );
}

export default RightPanelComponent;
