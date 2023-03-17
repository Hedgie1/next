// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Redis from 'ioredis'
let redis = new Redis({
  host: "redis",
  port: 6379,
  password: "",
})

export default function handler(req, res) {
  let text = redis.get("test")
  res.status(200).json({ name: text })
}

/*export function getServerSideProps() {
  let memes = fs.readdirSync(path.join(process.cwd(), "public/memes"))
  return {
    props: {
      memes: memes
    },
  }
}*/