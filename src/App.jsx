import React,{ useState } from "react";
import Task from "./Task";
const App = () => {
  
  const[inputList,setInputList] = useState("");

  const [Items,setItems] = useState([]);

  // [] this bracket is used for represent an array

  const itemEvent = (event) =>{
    // event ik object ke trah kam kr rha ha aur 
    // hm setinputist me EventTarget.value kre ghee toh 
    // hmre setinput list me value store hoo jauie ghee
    // jo setinput ka data hota ha voh hmra inputlist ka data bnjata ha
    setInputList(event.target.value);
  };

// hme agr list me add krne ha value toh hm ik empty array 
// le ghee fir usme add krte rhe ghee value

  const listofItems = () => {
    setItems( (oldItems) =>{
      return [...oldItems,inputList];
    });   
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) =>  {
      return oldItems.filter((arrElem , index)  => {
        // filter method takes an array of items and returns a completely new array 
        // that only contains the elements from the original array that match certain conditions. 
        return index !==id;  
      })
    })

  };
//  three dots means spreaded data ...
// complete store krna ha ik array me value 
// aur dots ke wajah se hm purana data bhi store kr skte ha
  return( 
    <>
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List</h1>
        <br />
         <input type="text" placeholder="Add a Items" 
         value={inputList}
         onChange={itemEvent} />
         <button onClick={listofItems}> + </button>
         <ol>
          {/* <li> {inputList}  </li> */}
          {/* map value me 4 attributes hote ha 
          1.current value
          2.current value ka index number kya ha
          3.array ke sath deal krna 
          4.this */}
         {Items.map( (itemval,index) => {
          return <Task  
          key={index}
          id ={index}
          text={itemval}
          onSelect={deleteItems}
          //  key={itemval .id}
          />;
          // todolist vale component me kaise opta chle 
          // ghaa ke voh ik value ha toh hm ik props pass kre ghee
         })} 
 
{/* html jaise dekhne vale items ke s ath deal 
karo ghee toh error ayie ghaa toh yeh ik 
jsx ha toh crly brackets lge */}

         </ol>
      </div>
    </div>
    </>
  );
};
export default App;