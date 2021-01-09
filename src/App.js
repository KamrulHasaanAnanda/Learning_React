import logo from './logo.svg';
import './App.css';
import Blog from './Blog';

function App() {
  let firstName="Ananda";
  let lastName="Hassan";
  let age=23;
  let job="Intern";
  let getFullName=(firstName,lastName)=>
  `${firstName} ${lastName}`
  let placeholder="Enter your details";
  //let blog={
  //   title:"Blog 1",
  //   descriptison:"lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor "
  // }
  // let style={
  //   margin:'16px',
  //   padding:'16px',
  //   boxSizing:'border-box',
  //   borderRadius:'5px',
  //   boxShadow:'0 2px  5px #ccc'
  // };
    let blogArr=[
      {
      id:1,
      title:"Blog 1",
      descriptison:"lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor "
    },
    {
     id:2,
      title:"Blog 2",
      descriptison:"lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor lorm Ipsum dolor "
    }
  ];
let blogMaps=blogArr.map((item,pos)=>{
  return(
    <Blog key={pos} id={item.id} title={item.title} descriptison={item.descriptison}/>
    // <div class="style" key={item.id}>
    //     <h2>{item.title}</h2>
    //     <p>{item.descriptison}</p>
      
    //   </div>
  );
});
  return (
    <div className="App">
      {blogMaps}
    </div>
  );
}

export default App;
