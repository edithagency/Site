import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Edith Agency',
  description: 'Politique de confidentialité et protection des données personnelles — Edith Agency.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="pt-40 pb-32 px-8 max-w-3xl">
      <p className="eyebrow mb-6">RGPD & données personnelles</p>
      <h1 className="font-display font-black text-brand-deep mb-16"
          style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}>
        Politique de confidentialité
      </h1>

      <div className="space-y-12 font-body text-[14px] text-brand-deep/80 leading-relaxed">

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">1. Responsable du traitement</h2>
          <ul className="space-y-1 pl-4">
            <li><strong>Nom :</strong> <span className="text-red-500 font-medium">À RÉDIGER</span></li>
            <li><strong>Email :</strong> hello@edithagency.fr</li>
            <li><strong>Adresse :</strong> <span className="text-red-500 font-medium">À RÉDIGER</span> — Bordeaux, France</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">2. Données collectées</h2>
          <p>Lors de l'utilisation du formulaire de contact, les données suivantes sont collectées :</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Contenu du message</li>
          </ul>
          <p className="mt-3">Aucune donnée sensible (bancaire, médicale…) n'est collectée.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">3. Finalité du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li>Répondre à vos demandes de contact</li>
            <li>Établir des devis et propositions commerciales</li>
            <li>Assurer le suivi de la relation client</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">4. Base légale</h2>
          <p>Le traitement est fondé sur votre <strong>consentement</strong> (formulaire de contact) et sur l'<strong>intérêt légitime</strong> d'Edith Agency pour la gestion de sa relation commerciale.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">5. Durée de conservation</h2>
          <p>Les données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, sauf obligation légale contraire.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">6. Partage des données</h2>
          <p>Vos données ne sont jamais vendues ni cédées à des tiers. Elles peuvent être transmises à des prestataires techniques (hébergement, messagerie) dans le strict cadre de la prestation, soumis à des obligations de confidentialité.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">7. Vos droits</h2>
          <p>Conformément au RGPD (Règlement UE 2016/679), vous disposez des droits suivants :</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li><strong>Droit d'accès</strong> à vos données</li>
            <li><strong>Droit de rectification</strong> des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> (droit à l'oubli)</li>
            <li><strong>Droit à la limitation</strong> du traitement</li>
            <li><strong>Droit d'opposition</strong> au traitement</li>
            <li><strong>Droit à la portabilité</strong> de vos données</li>
          </ul>
          <p className="mt-3">Pour exercer ces droits, contactez : <a href="mailto:hello@edithagency.fr" className="text-brand-mid underline">hello@edithagency.fr</a></p>
          <p className="mt-2">En cas de litige, vous pouvez saisir la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-mid underline">www.cnil.fr</a></p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">8. Cookies</h2>
          <p>Ce site utilise uniquement des cookies techniques indispensables à son fonctionnement (aucun cookie publicitaire ou de traçage tiers). Aucun consentement n'est requis pour ces cookies.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">9. Sécurité</h2>
          <p>Edith Agency met en œuvre les mesures techniques appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation.</p>
        </div>

        <p className="text-[12px] text-brand-deep/40 pt-4 border-t border-brand-deep/10">
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </section>
  )
}
