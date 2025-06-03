import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не поддерживается' });
  }

  const { name, email, gender, carType, phone } = req.body;

  if (!name || !email || !gender || !carType || !phone) {
    return res.status(400).json({ error: 'Заполните все поля' });
  }

  const message = `
Имя: ${name}
Email: ${email}
Пол: ${gender}
Тип машины: ${carType}
Телефон: ${phone}
  `;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      subject: `Заявка от ${name}`,
      text: message,
    });

    return res.status(200).json({ message: 'Письмо отправлено' });
  } catch (error) {
    console.error('Ошибка отправки письма:', error);
    return res.status(500).json({ error: 'Ошибка при отправке письма' });
  }
}
