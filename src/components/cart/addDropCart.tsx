import './cartStyles.css'
import zelda1 from './zelda1.jpg';
import mario1 from './mario1.png'

export function AddCart()
{   
    /**
     * Triggered when a draggable element (e.g., an image) starts being dragged.
     * Stores the element's ID in the drag event's dataTransfer object so it can be retrieved on drop.
     * @param ev - The drag event triggered by the draggable element.
     */
    function dragstartHandler(ev) {
        // Save the ID of the dragged element so it can be accessed during the drop
            ev.dataTransfer.setData("text", ev.target.id);
        }
    
    /**
     * Triggered when a draggable item is dragged over a drop target.
     * Must call preventDefault() to allow dropping—without it, the drop event won't fire.
     * @param ev - The dragover event triggered by the drop target.
     */
    function dragoverHandler(ev) {
        // Allow the drop by preventing the default browser behavior
        ev.preventDefault();
    }
    
    /**
     * Triggered when a draggable item is dropped onto a valid drop target.
     * Retrieves the dragged element by its ID and appends it to the drop zone.
     * Includes a safety check to prevent circular DOM nesting.
     * @param ev - The drop event triggered by the drop target.
     */
    function dropHandler(ev) {
        // Prevent default browser behavior (e.g., opening the image)
        ev.preventDefault();
        // Retrieve the ID of the dragged element from the drag event
        const data = ev.dataTransfer.getData("text");
        // Use the ID to get the actual DOM element being dragged
        const draggedElement = document.getElementById(data);

        // Identify the drop zone (the element that received the drop)
        const dropZone = ev.currentTarget;

        // Prevent circular DOM structure
        if (!draggedElement.contains(dropZone)) {
            dropZone.appendChild(draggedElement);
        }
    }

    return(
        <>
            
            {/* Drop Targets */}
            <div className="add-container" >
                
                <div id="add" >
                    {/* We store images in div and enable drop/drop features */}
                    <h2>ADD</h2>

                    <div className= "item-box" onDrop={dropHandler}   onDragOver={dragoverHandler}>
                        <img 
                            id="zelda" 
                            src={zelda1} 
                            draggable="true" 
                            onDragStart={dragstartHandler}
                            alt = "Zelda I"
                            
                        />
                    </div>

                    <div className="item-box" onDrop={dropHandler}   onDragOver={dragoverHandler}>
                        <img 
                        id="mario" 
                        src={mario1} 
                        draggable="true" 
                        onDragStart={dragstartHandler}
                        alt = "Super Mario I"
                        />
                    </div>
                      
                </div>
            </div>

            <div className="drop-container" >
                
                <div id="drop" >
                    {/* Drop here are empty box but we accept images as drop items. */}
                    <h2>DROP</h2>
                    <div className="item-box" onDrop={dropHandler}   onDragOver={dragoverHandler}></div>
                    <div className="item-box" onDrop={dropHandler}   onDragOver={dragoverHandler}></div>
                </div>
            </div>

        </>

    );

}