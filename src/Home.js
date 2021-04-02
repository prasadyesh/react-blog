import { useState } from "react";

const Home = () => {
    const [name,setName] = useState('Dafi');
    const [age,setAge] = useState(25);
    const [blogs,setBlogs] = useState(
        [{title:'React Experience' ,body:'Its not a chemical reaction', author:'I forgot', id:1},
        {title:'First Blog' ,body:'This is my first connect to my reader', author:'Comming soon', id:2},
        {title:'Travel' ,body:'traveling', author:'Traveller', id:3}]
    )

    const  handleClick = () =>{
        console.log('Hello reader');
    }
     
    const handleClickAgain = (localName,e) => {
        console.log('hello '+localName,e.target);
        setName(localName);
        setAge(30);
    }
    return (
         <div className="Home">
             <h1>Home</h1>
             <p>{name} is {age} years old</p>
             <button onClick={handleClick}>Click me</button>
             <button onClick={(e) => handleClickAgain('Mario',e)}>click again</button>
             {blogs.map((blog) => (
                 <div className="blog-preview" key={blog.id}>
                     <h2>{blog.title}</h2>
                     <p>Written byt {blog.author}</p>
                 </div>
             )
             )}
        </div> 
    );
}
 
export default Home;