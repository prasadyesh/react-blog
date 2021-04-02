const Bloglist = () => {
    return ( 
        <div className="Blog-list">{blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written byt {blog.author}</p>
            </div>
        )
        )}</div>
     );
}
 
export default Bloglist;