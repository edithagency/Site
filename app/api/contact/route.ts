import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'contact@seamoreagency.com'
const FROM_EMAIL = 'Sea More Agency <contact@seamoreagency.com>'

export async function POST(request: Request) {
  const { nom, email, sujet, message } = await request.json()

  if (!nom || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY manquante')
    return NextResponse.json({ error: 'Service indisponible' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    // Email à l'agence avec le message du visiteur
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: sujet || `Nouveau message de ${nom}`,
      text: `Nom : ${nom}\nEmail : ${email}\nSujet : ${sujet || '(non précisé)'}\n\nMessage :\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Erreur envoi email :', error)
    return NextResponse.json({ error: 'Échec de l\'envoi' }, { status: 500 })
  }
}
