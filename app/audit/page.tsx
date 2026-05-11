'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

/* ── DONNÉES ── */
const QUESTIONS = [
  {
    id: 'q1',
    num: 1,
    label: 'Ton activité',
    question: 'Tu es dans quel secteur ?',
    multi: false,
    options: [
      'Restauration',
      'Mode / Beauté / Bien-être',
      'Artisan / Commerce local',
      'Culture',
      'Autre activité locale',
    ],
  },
  {
    id: 'q2',
    num: 2,
    label: 'Ta présence sur les réseaux',
    question: 'Comment tu décrirais ta présence sur les réseaux sociaux aujourd\'hui ?',
    multi: false,
    options: [
      'Je publie régulièrement mais sans ligne directrice',
      'Je publie occasionnellement, par manque de temps',
      'J\'ai des réseaux sociaux mais ils sont à l\'abandon',
      'Je n\'ai aucune présence sur les réseaux',
    ],
  },
  {
    id: 'q3',
    num: 3,
    label: 'Ton identité de marque',
    question: 'Comment tu évalues ton image de marque aujourd\'hui ?',
    multi: false,
    options: [
      'Elle est forte, cohérente et reconnaissable',
      'Elle existe mais manque de cohérence visuelle',
      'Mon logo est là mais rien n\'est vraiment unifié',
      'Je n\'ai pas encore travaillé mon identité de marque',
    ],
  },
  {
    id: 'q4',
    num: 4,
    label: 'Ton site web',
    question: 'Quelle est ta situation côté site internet ?',
    multi: false,
    options: [
      'J\'ai un site professionnel, moderne et à jour',
      'J\'ai un site mais il est peu efficace / peu pratique',
      'Je n\'ai pas de site internet',
      'Je n\'ai pas besoin de site internet',
    ],
  },
  {
    id: 'q5',
    num: 5,
    label: 'Ta stratégie de communication',
    question: 'Est-ce que tu as une stratégie de communication définie ?',
    multi: false,
    options: [
      'Oui, j\'ai une vision claire et je l\'applique',
      'J\'ai quelques idées mais rien de structuré',
      'Je communique au feeling, sans plan précis',
      'Je n\'ai aucune stratégie en place',
    ],
  },
  {
    id: 'q6',
    num: 6,
    label: 'Ton contenu',
    question: 'Comment tu produis ton contenu visuel actuellement ?',
    multi: false,
    options: [
      'Je le fais moi-même avec ce que j\'ai (ex : téléphone)',
      'Je publie ce que j\'ai, sans vraie réflexion visuelle',
      'Je ne produis pas de contenu pour l\'instant',
    ],
  },
  {
    id: 'q7',
    num: 7,
    label: 'Tes objectifs',
    question: 'Quel est ton objectif prioritaire pour les 6 prochains mois ?',
    multi: true,
    options: [
      'Asseoir ma crédibilité et mon image professionnelle',
      'Gagner en visibilité auprès de ma cible locale',
      'Transformer ma communauté en clients actifs',
      'Construire une présence en ligne solide de A à Z',
    ],
  },
  {
    id: 'q8',
    num: 8,
    label: 'Ton budget',
    question: 'Comment tu envisages d\'investir dans ta communication ?',
    multi: false,
    options: [
      'J\'ai un budget défini et je cherche le bon partenaire',
      'Je n\'ai pas encore réfléchi à un budget mais j\'aimerais être accompagné',
    ],
  },
]

/* ── DIAGNOSTICS ── */
const DIAGNOSES = [
  {
    id: 'refondre',
    title: 'Refondre pour exister',
    text: 'Ton activité existe, mais en ligne elle ne convainc pas encore. Un site qui convertit mal, une image de marque qui manque de cohérence et une communication sans fil rouge. C\'est un frein direct à ta croissance. La bonne nouvelle ? Tout est là, il faut juste tout remettre dans le bon ordre. On commence par poser une identité visuelle forte et reconnaissable, on refond ton site pour qu\'il soit ton meilleur argument de vente, et on construit une stratégie de communication qui donne une direction claire à chaque publication.',
  },
  {
    id: 'construire',
    title: 'Construire de zéro, mais bien',
    text: 'Tu n\'as pas encore de présence en ligne, et c\'est une vraie opportunité. Partir de zéro, ça veut dire construire quelque chose de solide dès le départ, sans avoir à défaire de mauvaises habitudes. On pose d\'abord ton identité de marque : qui tu es, ce que tu fais, à qui tu t\'adresses. Ensuite on crée un site clair et efficace qui travaille pour toi 24h/24. Et on installe une stratégie réseaux adaptée à ta cible locale pour commencer à générer de la visibilité rapidement.',
  },
  {
    id: 'exister',
    title: 'Exister ne suffit plus',
    text: 'Tu es sur les réseaux, tu publies, mais les résultats ne sont pas au rendez-vous. Le problème n\'est pas le manque d\'effort, c\'est le manque de méthode. Sans ligne éditoriale claire, sans cohérence visuelle et sans stratégie définie, chaque publication repart de zéro. Ce qu\'il te faut : une identité de contenu forte, un calendrier éditorial structuré et du contenu vidéo et photo qui capte l\'attention dès les premières secondes.',
  },
  {
    id: 'image',
    title: 'L\'image avant tout',
    text: 'Tu travailles bien, ton activité a de la valeur, mais ton image en ligne ne le montre pas encore. Des visuels pris avec le téléphone, un logo seul sans univers autour, une présentation qui ne reflète pas ta qualité réelle : tout ça crée un décalage entre ce que tu es et ce que les gens perçoivent. La solution passe d\'abord par un branding solide : des couleurs, des typographies, un univers visuel cohérent que l\'on décline ensuite sur tous tes supports.',
  },
  {
    id: 'deleguer',
    title: 'Déléguer pour accélérer',
    text: 'Tu sais que ta communication est importante, mais entre la gestion de ton activité et tout le reste, elle passe toujours en dernier. Résultat : des publications irrégulières, un compte qui stagne et une image qui ne reflète pas ce que tu vaux vraiment. La solution la plus efficace pour toi : déléguer entièrement. Tu définis tes objectifs, je m\'occupe de tout : stratégie, création de contenu, montage vidéo, gestion des réseaux.',
  },
  {
    id: 'convertir',
    title: 'Structurer pour convertir',
    text: 'Tu as les outils : un site, des réseaux, une présence. Mais avoir une audience ne suffit pas si elle ne se transforme pas en clients. Le chaînon manquant, c\'est la stratégie de conversion. Il s\'agit de créer un parcours cohérent entre tes réseaux et ton site, de produire du contenu qui pousse à l\'action, et d\'aligner chaque publication sur un objectif commercial précis.',
  },
  {
    id: 'site',
    title: 'Le site, ton meilleur commercial',
    text: 'En 2025, ne pas avoir de site performant c\'est laisser des clients aller directement chez la concurrence. Ton site internet, c\'est ton commercial disponible 24h/24 : il présente ton activité, rassure le visiteur et le pousse à te contacter. Un site bien conçu, rapide, clair, adapté au mobile, change radicalement la perception que les gens ont de toi.',
  },
  {
    id: 'locale',
    title: 'Une présence locale qui s\'impose',
    text: 'Tes clients potentiels sont à deux pas de chez toi, mais ils ne te trouvent pas en ligne. Dans un secteur local, la visibilité digitale est devenue aussi importante que ta vitrine physique. Les gens cherchent, comparent et choisissent en ligne avant même de se déplacer. Ce qu\'il te faut : une stratégie de communication locale ciblée, du contenu régulier qui montre la vie de ton établissement, et une identité visuelle qui donne envie.',
  },
  {
    id: 'aligner',
    title: 'Tout aligner pour tout décupler',
    text: 'Tu as des ambitions claires et multiples, et c\'est une très bonne chose. Mais pour les atteindre, tous tes leviers de communication doivent tirer dans la même direction. Aujourd\'hui, ton branding, ton site, tes réseaux et ta stratégie fonctionnent en silo, sans cohérence globale. Ce qu\'il faut construire : un écosystème de communication unifié où chaque élément renforce les autres.',
  },
  {
    id: 'base',
    title: 'Une bonne base, une meilleure suite',
    text: 'Tu as fait les choses bien : un site propre, une identité visuelle qui tient la route. Mais ces outils ne donnent pas encore leur plein potentiel parce qu\'ils ne sont pas activés par une vraie stratégie de contenu. Un bon site sans trafic, c\'est une belle boutique avec les volets fermés. Ce qu\'il te faut maintenant : une stratégie éditoriale cohérente, du contenu vidéo et photo régulier.',
  },
]

type Answers = Record<string, number | number[]>

/* Q4 options: 0=pro site, 1=poor site, 2=no site, 3=no site needed */
function getDiagnosis(answers: Answers) {
  const q1 = answers.q1 as number
  const q2 = answers.q2 as number
  const q3 = answers.q3 as number
  const q4 = answers.q4 as number
  const q5 = answers.q5 as number
  const q7 = (answers.q7 ?? []) as number[]
  const noSite = q4 === 3

  // Aucune présence + pas de site + pas de stratégie
  if (q2 >= 2 && q4 >= 2 && q5 >= 2) return noSite ? DIAGNOSES[4] : DIAGNOSES[1]

  // Restauration/commerce + réseaux à l'abandon + visibilité locale
  if ((q1 === 0 || q1 === 2) && q2 >= 2 && q7.includes(1)) return DIAGNOSES[7]

  // Site pro + identité ok + pas de stratégie → bonne base
  if (q4 === 0 && q3 === 0 && q5 >= 1) return DIAGNOSES[9]

  // Site existant + objectif convertir abonnés → structurer
  if (q4 <= 1 && q2 <= 1 && q7.includes(2)) return DIAGNOSES[5]

  // Pas de site + visibilité + budget défini → le site (jamais si pas besoin de site)
  if (!noSite && q4 >= 2 && q7.includes(1) && (answers.q8 as number) === 0) return DIAGNOSES[6]

  // Site peu efficace + identité floue + pas de stratégie → refondre
  if (q4 === 1 && q3 >= 1 && q5 >= 2) return DIAGNOSES[0]

  // Identité floue + objectif crédibilité → image
  if (q3 >= 1 && q7.includes(0)) return DIAGNOSES[3]

  // Manque de temps + au feeling → déléguer
  if (q2 === 1 && q5 >= 2) return DIAGNOSES[4]

  // Plusieurs objectifs + tout flou → tout aligner
  if (q7.length >= 2 && q5 >= 1 && q3 >= 1) return DIAGNOSES[8]

  // Présent réseaux + pas de stratégie → exister ne suffit plus
  if (q2 <= 1 && q5 >= 2) return DIAGNOSES[2]

  return DIAGNOSES[2]
}

function buildEmailBody(
  answers: Answers,
  diagnosisTitle: string,
  form: { nom: string; tel: string; message: string }
): string {
  const labels: Record<string, string[]> = {}
  QUESTIONS.forEach(q => { labels[q.id] = q.options })

  const get = (id: string) => {
    const val = answers[id]
    if (val === undefined) return '—'
    if (Array.isArray(val)) return val.map(i => labels[id][i]).join(', ')
    return labels[id][val as number] ?? '—'
  }

  return [
    'Résultats de l\'Audit Express :',
    '',
    `Secteur : ${get('q1')}`,
    `Présence réseaux : ${get('q2')}`,
    `Identité de marque : ${get('q3')}`,
    `Site web : ${get('q4')}`,
    `Stratégie : ${get('q5')}`,
    `Contenu : ${get('q6')}`,
    `Objectifs : ${get('q7')}`,
    `Budget : ${get('q8')}`,
    `Diagnostic généré : ${diagnosisTitle}`,
    '',
    `Nom/Société : ${form.nom}`,
    `Téléphone : ${form.tel}`,
    `Message complémentaire : ${form.message || 'Aucun message'}`,
  ].join('\n')
}

/* ── VARIANTS ANIMATION (direction 1=forward, -1=back) ── */
const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
}

/* ── COMPOSANT PRINCIPAL ── */
export default function AuditPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [answers, setAnswers] = useState<Answers>({})
  const [selected, setSelected] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState({ nom: '', tel: '', message: '' })
  const [formSent, setFormSent] = useState(false)

  const question = QUESTIONS[step]
  const total = QUESTIONS.length

  // Barre de progression question : la question en cours compte (1/8 dès Q1)
  const questionProgress = ((step + 1) / total) * 100

  // Temps estimé (affiché en texte uniquement)
  const remainingSec = (total - step) * 15
  const timeMin = Math.floor(remainingSec / 60)
  const timeSec = remainingSec % 60
  const timeDisplay = remainingSec >= 60
    ? `${timeMin} min${timeSec > 0 ? ` ${timeSec}` : ''}`
    : `${remainingSec} sec`

  function selectSingle(i: number) {
    const newAnswers = { ...answers, [question.id]: i }
    setAnswers(newAnswers)
    setTimeout(() => {
      setDirection(1)
      if (step < total - 1) {
        setStep(s => s + 1)
        setSelected([])
      } else {
        setShowResult(true)
      }
    }, 280)
  }

  function toggleMulti(i: number) {
    setSelected(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    )
  }

  function confirmMulti() {
    if (selected.length === 0) return
    setDirection(1)
    const newAnswers = { ...answers, [question.id]: selected }
    setAnswers(newAnswers)
    if (step < total - 1) {
      setStep(s => s + 1)
      setSelected([])
    } else {
      setShowResult(true)
    }
  }

  function goBack() {
    if (step === 0) return
    const prevStep = step - 1
    const prevQuestion = QUESTIONS[prevStep]
    setDirection(-1)
    if (prevQuestion.multi) {
      const prevAnswer = answers[prevQuestion.id]
      setSelected(Array.isArray(prevAnswer) ? prevAnswer : [])
    } else {
      setSelected([])
    }
    setStep(prevStep)
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault()
    const emailBody = buildEmailBody(answers, diagnosis?.title ?? '—', formData)
    console.log('Audit Express — email body:\n' + emailBody)
    setFormSent(true)
  }

  const diagnosis = showResult ? getDiagnosis(answers) : null

  /* ── RÉSULTAT ── */
  if (showResult && diagnosis) {
    return (
      <div style={{ minHeight: '100vh', background: '#1a2e32', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 640, width: '100%', textAlign: 'center', margin: '0 auto' }}
        >
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#66a2ad', marginBottom: 24 }}>
            Ton diagnostic
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px, 5vw, 52px)', color: '#e7e3dd', lineHeight: 1.05, marginBottom: 32 }}>
            {diagnosis.title}
          </h1>
          <div style={{ width: 48, height: 2, background: '#f4db75', margin: '0 auto 32px', borderRadius: 2 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 15, color: '#e7e3dd', opacity: 0.75, lineHeight: 1.8, marginBottom: 48, textAlign: 'center' }}>
            {diagnosis.text}
          </p>

          {/* Formulaire de contact intégré */}
          {formSent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center', padding: '32px 0' }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, color: '#f4db75', marginBottom: 12 }}>
                Merci !
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14, color: '#e7e3dd', opacity: 0.7, lineHeight: 1.7 }}>
                J'ai bien reçu ton audit. Je reviens vers toi très vite.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleFormSubmit}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ textAlign: 'left' }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#66a2ad', marginBottom: 20 }}>
                Travaillons ensemble
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20 }}>
                <div>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66a2ad', display: 'block', marginBottom: 8 }}>
                    Nom / Société *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom ou raison sociale"
                    value={formData.nom}
                    onChange={e => setFormData({ ...formData, nom: e.target.value })}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10, padding: '14px 18px',
                      fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
                      color: '#e7e3dd', outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66a2ad', display: 'block', marginBottom: 8 }}>
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="06 XX XX XX XX"
                    value={formData.tel}
                    onChange={e => setFormData({ ...formData, tel: e.target.value })}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10, padding: '14px 18px',
                      fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
                      color: '#e7e3dd', outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66a2ad', display: 'block', marginBottom: 8 }}>
                    Message complémentaire
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Un détail à ajouter ? Une question ?"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%', boxSizing: 'border-box',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 10, padding: '14px 18px',
                      fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
                      color: '#e7e3dd', outline: 'none', resize: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Champ caché : résumé complet de l'audit (invisible pour l'utilisateur) */}
              <input
                type="hidden"
                name="audit_summary"
                value={buildEmailBody(answers, diagnosis.title, formData)}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: '#f4db75', color: '#2b616b', border: 'none',
                    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '16px 36px', borderRadius: 999, cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  Envoyer ma demande de devis
                </motion.button>

                <button
                  type="button"
                  onClick={() => router.push('/')}
                  style={{
                    background: 'transparent', color: '#e7e3dd',
                    border: '1px solid rgba(231,227,221,0.12)',
                    fontFamily: 'var(--font-body)', fontSize: 11,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '12px 24px', borderRadius: 999, cursor: 'pointer',
                    opacity: 0.4, width: '100%',
                  }}
                >
                  Retour à l'accueil
                </button>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    )
  }

  /* ── QUESTION ── */
  return (
    <div style={{ minHeight: '100vh', background: '#1a2e32', display: 'flex', flexDirection: 'column' }}>

      {/* En-tête fixe avec double barre de progression */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(26,46,50,0.96)', backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        {/* Ligne logo + temps estimé */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px 10px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#e7e3dd', fontSize: 15, opacity: 0.9 }}>
            edith<span style={{ fontFamily: 'var(--font-body)', fontStyle: 'normal', fontSize: 10, letterSpacing: '0.18em', fontWeight: 500 }}>AGENCY</span>
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: '#66a2ad', opacity: 0.8, letterSpacing: '0.08em' }}>
            ≈ {timeDisplay} restant
          </span>
        </div>

        {/* Barre de progression questions */}
        <div style={{ padding: '0 24px 6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e7e3dd', opacity: 0.45 }}>
              Question {step + 1} sur {total}
            </span>
          </div>
          <div style={{ height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 99, overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', background: '#f4db75', borderRadius: 99 }}
              animate={{ width: `${questionProgress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

      </div>

      {/* Contenu question */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 60px' }}>
        <div style={{ maxWidth: 680, width: '100%' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Label */}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#66a2ad', marginBottom: 16 }}>
                {question.label}
              </p>

              {/* Question */}
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px, 4vw, 40px)', color: '#f4db75', lineHeight: 1.15, marginBottom: 40 }}>
                {question.question}
              </h2>

              {/* Multi-select hint */}
              {question.multi && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#66a2ad', letterSpacing: '0.1em', marginBottom: 20, textTransform: 'uppercase' }}>
                  Plusieurs réponses possibles
                </p>
              )}

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {question.options.map((opt, i) => {
                  const isSelected = question.multi
                    ? selected.includes(i)
                    : answers[question.id] === i

                  return (
                    <motion.button
                      key={i}
                      onClick={() => question.multi ? toggleMulti(i) : selectSingle(i)}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16,
                        background: isSelected ? 'rgba(244,219,117,0.12)' : 'rgba(255,255,255,0.04)',
                        border: isSelected ? '1px solid rgba(244,219,117,0.5)' : '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 12, padding: '18px 22px',
                        cursor: 'pointer', textAlign: 'left', width: '100%',
                        transition: 'background 0.2s, border 0.2s',
                      }}
                    >
                      <div style={{
                        width: 20, height: 20, borderRadius: question.multi ? 4 : '50%',
                        border: isSelected ? '2px solid #f4db75' : '2px solid rgba(255,255,255,0.2)',
                        background: isSelected ? '#f4db75' : 'transparent',
                        flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s',
                      }}>
                        {isSelected && (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            {question.multi
                              ? <path d="M2 5l2.5 2.5L8 3" stroke="#2b616b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              : <circle cx="5" cy="5" r="2.5" fill="#2b616b"/>
                            }
                          </svg>
                        )}
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 14,
                        color: isSelected ? '#f4db75' : '#e7e3dd',
                        lineHeight: 1.5, transition: 'color 0.2s',
                      }}>
                        {opt}
                      </span>
                    </motion.button>
                  )
                })}
              </div>

              {/* Bouton confirmer (multi uniquement) */}
              {question.multi && (
                <motion.button
                  onClick={confirmMulti}
                  disabled={selected.length === 0}
                  whileHover={selected.length > 0 ? { scale: 1.02 } : {}}
                  whileTap={selected.length > 0 ? { scale: 0.98 } : {}}
                  style={{
                    marginTop: 28,
                    background: selected.length > 0 ? '#f4db75' : 'rgba(255,255,255,0.08)',
                    color: selected.length > 0 ? '#2b616b' : 'rgba(255,255,255,0.3)',
                    border: 'none', borderRadius: 999,
                    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    padding: '15px 32px', cursor: selected.length > 0 ? 'pointer' : 'default',
                    transition: 'all 0.25s',
                  }}
                >
                  Continuer
                </motion.button>
              )}

              {/* Bouton retour (à partir de Q2) */}
              {step > 0 && (
                <div style={{ marginTop: question.multi ? 16 : 28 }}>
                  <button
                    onClick={goBack}
                    style={{
                      background: 'transparent', border: 'none',
                      fontFamily: 'var(--font-body)', fontSize: 11,
                      color: '#e7e3dd', opacity: 0.35,
                      letterSpacing: '0.08em', cursor: 'pointer',
                      padding: '8px 0',
                    }}
                  >
                    ← Question précédente
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
