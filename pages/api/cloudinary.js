

function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'Next.js' })
  }
}

export default handler;
