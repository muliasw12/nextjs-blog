import Head from 'next/head'


export default function Home(props) {
  const posts = props.posts;
  return (
    <div style={{ padding: 30 }}>
      <Head>
        <title>Social App</title>
      </Head>
      <div class="banner">
            <div class="container">
                <h1>Social Articles</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Minus illo iure ipsum pariatur nihil, est nobis sint nam, 
                    quas qui accusamus vel numquam dolorum quidem, neque 
                    inventore perferendis suscipit provident?
                </p>
            </div>
            <div class="input-group input-group-lg">
                <input type="text" placeoholder="Search a Post" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                <button type="button" class="btn btn-outline-secondary btn-lg">Search</button>
            </div>
      </div>
      <div>
        {posts.map(post =>
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>)}
      </div>
    </div>
  )
}

// Fetching data from the JSON file
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

