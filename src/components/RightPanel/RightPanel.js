import { useRef, useState } from 'react';

import './RightPanel.scss';

function RightPanel({ object, getObjectContent }) {
    const tableBodyRows = getObjectContent(object, true);
    const sepOffset = useRef({
        initialX: 0,
        currentX: 0
    });
    const [width, setWidth] = useState(425);
    const [currentX, setCurrentX] = useState(0);

    function mouseDownHandler(event) {
        pauseSelectionEvent(event);
        document.body.addEventListener('mousemove', mouseMoveHandler);
        document.body.addEventListener('mouseup', mouseUpHandler);
        sepOffset.current.initialX = event.pageX;
    }

    function mouseMoveHandler(event) {
        pauseSelectionEvent(event);
        sepOffset.current.currentX = event.pageX;
        setCurrentX(event.pageX);
    }

    function mouseUpHandler() {
        const updatedWidth = width + (sepOffset.current.initialX - sepOffset.current.currentX);
        document.body.removeEventListener('mousemove', mouseMoveHandler);
        document.body.removeEventListener('mouseup', mouseUpHandler);
        sepOffset.current.currentX = 0;
        setWidth(updatedWidth < 425 ? 425 : updatedWidth);
        setCurrentX(0);
    }

    function pauseSelectionEvent(event) {
        if (!event) {
            return;
        }
        event.stopPropagation();
        event.preventDefault();
    }

    const className = currentX > 0 ? 'drag-preview show' : 'drag-preview';

    return (
        <div className="right-panel" style={{ minWidth: width }}>
            <div className={ className } style={{ left: currentX - 40 }}></div>
            <div className="draggable" onMouseDown={ mouseDownHandler }></div>
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

export default RightPanel;
