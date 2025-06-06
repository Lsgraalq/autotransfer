import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, gender, carType, phone } = body;

  if (!name || !email || !gender || !carType || !phone) {
    return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 });
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
        user: "yavheheaven@gmail.com",
        pass: "evbq woej dpir kjvv",
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'ilya.merinec@gmail.com',
      subject: `Заявка от ${name}`,
      text: message,
    });

    return NextResponse.json({ message: 'Письмо отправлено' }, { status: 200 });
  } catch (error) {
    console.error('Ошибка отправки письма:', error);
    return NextResponse.json({ error: 'Ошибка при отправке письма' }, { status: 500 });
  }
}
