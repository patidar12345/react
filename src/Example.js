import {  useEffect ,useState} from "react";
function Example() {
  let [count, setcount] = useState(0);
  useEffect(() => {
    document.title = `welcome ${count}`;
  }, [count])
  function ChangeCount() {
    count+=1
    setcount(count)
  }

  return (
    <div>
      <input type="button" value="click" onClick={ChangeCount} />
      <br />

      <h1>useEffect example {count}</h1>
    </div>
  );
}
export default Example
