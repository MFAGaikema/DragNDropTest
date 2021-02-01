import React, {useRef, useState} from 'react';
import DnDGroup from './DndGroup';

const DragNDrop = ({data}) => {
  const [list, setList] = useState(data);

  const dragItem = useRef();
  const dragNode = useRef();

  const getParams = (element) => {
    const itemNum = element.toString();
    const group = list.find(group => group.items.find(item => item === itemNum))
    const groupIndex = list.indexOf(group);
    const itemIndex = group.items.indexOf(itemNum);
    return {'groupIndex': groupIndex, 'itemIndex': itemIndex}
  }

  const handleDragstart = (e) => {

    dragNode.current = e.target;
    setTimeout(() => {
      dragNode.current.classList.add('current')
    }, 0)    
    dragItem.current = getParams(e.target.value);

    dragNode.current.addEventListener('dragend', () => {
      if(dragNode.current !== undefined) {
        dragNode.current.classList.remove('current')
      } 
    })
  }

  const handleDragEnter = e => {
    if(dragNode.current !== e.target && e.target.value !== undefined) {
      const node = getParams(e.target.value);
      const currentItem = dragItem.current;
      const newList = [...list];
      [newList[currentItem.groupIndex].items[currentItem.itemIndex], newList[node.groupIndex].items[node.itemIndex]] = [newList[node.groupIndex].items[node.itemIndex], newList[currentItem.groupIndex].items[currentItem.itemIndex]]
      setList(newList)
    } 
  } 

  console.log(list)



	return (
    <div className='drag-n-drop'>
      {list.map(group => (
        <DnDGroup 
          key={group.title} 
          group={group} 
          handleDragstart={handleDragstart}
          handleDragEnter={handleDragEnter}
        />
      ))}
		</div>
	);
};

export default DragNDrop;
