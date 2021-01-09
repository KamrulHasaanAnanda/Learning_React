import logo from './logo.svg';
import './App.css';

function App() {
  let firstName="Ananda";
  let lastName="Hassan";
  let age=23;
  let job="Intern";
  let getFullName=(firstName,lastName)=>
  `${firstName} ${lastName}`
  let placeholder="Enter your details";
  let blog={
    title:"Blog 1",
    descriptison:"lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor "
  }
  // let style={
  //   margin:'16px',
  //   padding:'16px',
  //   boxSizing:'border-box',
  //   borderRadius:'5px',
  //   boxShadow:'0 2px  5px #ccc'
  // };
  return (
    <div className="App">
      <div /*style={style}*/ class="style">
      <h1>{getFullName(firstName,lastName)}</h1>
      <p>{age}</p>
      <p>{job}</p>
      <input placeholder={placeholder} autoComplete></input>
      </div>
      <div class="style">
        <h2>{blog.title}</h2>
        <p>{blog.descriptison}</p>
      
      </div>
      <hr></hr>
      <div class="style">
        <h2>{blog.title}</h2>
        <p>{blog.descriptison}</p>
      
      </div>
    </div>
  );
}

export default App;
