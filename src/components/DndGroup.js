import React from 'react';
import DndItem from './DndItem';

const DndGroup = ({ group, handleDragstart, handleDragEnter }) => {
	return (
		<ul className='dnd-group'>
			<div className='group-title'>{group.title}</div>
			{group.items.map(item => (
        <DndItem 
          key={item} 
          item={item} 
					handleDragstart={handleDragstart}
					handleDragEnter={handleDragEnter}
        />
			))}
		</ul>
	);
};

export default DndGroup;
