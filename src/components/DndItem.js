import React from 'react';

const DndItem = ({ item, handleDragstart, handleDragEnter }) => {
	return (
    <li 
      draggable 
			onDragStart={handleDragstart}
			onDragEnter={handleDragEnter} 
      className='dnd-item'
      value={item}>
			<div>
				<p>{`ITEM ${item}`}</p>
			</div>
		</li>
	);
};

export default DndItem;
