const con = require("./db_connect");


async function createTable() {
let sql=`CREATE TABLE IF NOT EXISTS posts (
  postID INT NOT NULL AUTO_INCREMENT,
  userID INT NOT NULL,
  post1 VARCHAR(255) NOT NULL,
  CONSTRAINT postPK PRIMARY KEY(postID),
  CONSTRAINT post_fk FOREIGN KEY(userID) REFERENCES users(userID)
); `
await con.query(sql);
}
createTable();

async function create(post) {

const sql = `INSERT INTO post (userID,posts)
  VALUES ("${post.userID}","${post.posts}");
`

await con.query(sql);
return {success:"Post Added"};
}


async function getAllPosts() {
 const sql = "SELECT * FROM posts;";
 let post = await con.query(sql);
 console.log(posts)
 return posts;
}


async function getPost(post) {
  let sql;
  
    sql = `
      SELECT * FROM posts
       WHERE userID = "${post.userID}"
    `
  
  return await con.query(sql);  
}
async function deletePost(post) {
    let sql = `DELETE FROM posts
      WHERE postID = "${post.postID}"
    `
    await con.query(sql);
    }
async function editPost(post) {
  let sql = `UPDATE posts 
    SET posts = "${post.posts}"
    WHERE postID = ${post.postID}
  `;
  
  await con.query(sql);
  let updatedPost = await getPost(post);
  return updatedPost[0];
  }



module.exports = { getAllPosts, getPost, create, deletePost, editPost};