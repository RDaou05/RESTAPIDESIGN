// CMSC 426 - In-Class Activity 2, Sections B & C
// Run in Studio 3T IntelliShell (or mongosh) one step at a time.

// ---------------- SECTION B ----------------

// 1. Display all databases
show dbs

// 2. Create / switch to the blog database
use blog

// 3. Create the posts collection - method 1: explicitly
db.createCollection("posts")

// 3. Create the posts collection - method 2: implicitly, by inserting into it
//    (MongoDB creates the collection on first insert)
// db.posts.insertOne(object)

// 4. Insert a new document using insertOne()
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})

// 5. Insert multiple documents using insertMany()
db.posts.insertMany([
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])

// ---------------- SECTION C ----------------

// 1. Find documents
db.posts.find()
db.posts.findOne()

// 2. Update documents
db.posts.updateOne( { title: "Post Title 1" }, { $set: { likes: 2 } } )

db.posts.updateOne(
  { title: "Post Title 5" },
  {
    $set:
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  },
  { upsert: true }
)

// 3. Delete documents
db.posts.deleteOne({ title: "Post Title 5" })

db.posts.deleteMany({ category: "Technology" })
