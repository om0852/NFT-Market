import { PinataSDK } from "pinata";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Disables Next.js default body parser
  },
};

const jwt = "your_jwt_here";
const gateway_url = "https://harlequin-managing-cattle-394.mypinata.cloud";

const pinata = new PinataSDK({
  pinataJwt: jwt,
  pinataGateway: gateway_url,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = "./";
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Form error:", err);
      return res.status(500).json({ error: "Failed to parse form" });
    }

    const file = fs.createReadStream(files.file[0].filepath);

    try {
      const { cid } = await pinata.upload.public.file(file);
      const url = await pinata.gateways.public.convert(cid);
      return res.status(200).json({ url });
    } catch (e) {
      console.error("Upload error:", e);
      return res.status(500).json({ error: "Upload failed" });
    }
  });
}
