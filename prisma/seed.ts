import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error('Ошибка: DATABASE_URL не найдена в .env');
  process.exit(1);
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.$transaction(async (tx) => {
    const categories = [
      { name: 'Образование' },
      { name: 'Развлечения' },
      { name: 'Спорт' },
      { name: 'Технологии' },
      { name: 'Игры' },
      { name: 'Другое' },
    ];
    await Promise.all(
      categories.map((cat) =>
        tx.category.upsert({
          where: { name: cat.name },
          update: {},
          create: cat,
        }),
      ),
    );
    const ageRatings = [
      { code: '0+' },
      { code: '6+' },
      { code: '12+' },
      { code: '16+' },
      { code: '18+' },
    ];
    await Promise.all(
      ageRatings.map((rate) =>
        tx.ageRating.upsert({
          where: { code: rate.code },
          update: {},
          create: rate,
        }),
      ),
    );
  });
}

main()
  .catch((e) => {
    console.error('Ошибка при сидировании:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
