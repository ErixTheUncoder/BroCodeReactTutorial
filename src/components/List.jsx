function List(props){

  const itemList = props.items;
  const category = props.category;
  
  itemList.sort((a,b) => a.name.localeCompare(b.name));// ALPHABETICAL
  // fruits.sort((a,b) => b.name.localeCompare(a.name));// REVERSE ALPHABETICAL
  
  //const lowCalFruit =  fruits.filter(ONEfruit => ONEfruit.calories<100);
  const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.calories}</b>
                                          </li>);

  return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-listItems">{listItems}</ol>
    </>);
}

export default List