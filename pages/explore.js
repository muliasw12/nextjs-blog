

export default function ExplorePage(props) {
    const posts = props.posts;
    const comments = props.comments;
    return (
        <section class="posts">
            <div class="title">
                <h1>Explore</h1>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <button type="button" class="btn btn-outline-secondary">Post</button>
                </div>
                <textarea class="form-control" aria-label="With textarea"></textarea>
            </div>
            <div class="btn-btn">
                <button type="button" class="btn btn-outline-danger">Delete</button>
                <button type="button" class="btn btn-outline-success">Update</button>
                <button type="button" class="btn btn-outline-primary">Read</button>
            </div>
            <div class="section-center">
                <article class="post">
                    <div class="post-title">
                    {posts.map(post =>
                        <div
                        key={post.id}
                        style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>)}
                        <div class="post-text">
                        {comments.map(comment =>
                            <div
                            key={comment.id}>
                                <h4>{comment.name}</h4>
                                <p>{comment.body}</p>
                        </div>)}
                        </div>
                    </div>
                </article>
            </div>
            
                
            
        </section>
        
    );
};



import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/data/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
