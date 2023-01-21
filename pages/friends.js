export default function TrendingPage(props) {
    const comments = props.comments;
    return (
      <div>
        <h1>My Friends</h1>
        <div class="list-user">
            {comments.map(comment =>
              <div key={comment.id} style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
                <h3>{comment.name}</h3>
                <h4>{comment.email}</h4>
                <p>{comment.body}</p>
            </div>)}
        </div>
      </div>
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

  