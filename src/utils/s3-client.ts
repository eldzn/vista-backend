import { S3Client } from '@aws-sdk/client-s3';
import 'dotenv/config'

export const s3Client = new S3Client({
  endpoint: process.env.MINIO_ENDPOINT,
  region: process.env.MINIO_REGION,
  credentials: {
    accessKeyId: process.env.MINIO_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.MINIO_SECRET_ACCESS_KEY as string,
  },
  forcePathStyle: true,
});