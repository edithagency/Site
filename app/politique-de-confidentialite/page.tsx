import type { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Sea More Agency',
  description: 'Politique de confidentialité et protection des données personnelles — Sea More Agency.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="relative pt-40 pb-32 px-8 max-w-5xl">
      <BackButton />
      <p className="eyebrow mb-6">RGPD & données personnelles</p>
      <h1 className="text-brand-deep mb-16"
          style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(32px, 5vw, 52px)' }}>
        Politique de confidentialité
      </h1>

      <div className="space-y-12 font-poppins text-[14px] text-brand-deep/80 leading-relaxed">

        <div>
          <p>
            Sea More Agency attache une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique quelles données sont collectées sur le site seamore.fr, pourquoi, comment elles sont utilisées et quels sont vos droits.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>1. Responsable du traitement</h2>
          <ul className="space-y-1 pl-4">
            <li><strong>Nom commercial :</strong> Sea More Agency</li>
            <li><strong>Exploitant :</strong> Apouey Edith (auto-entrepreneur)</li>
            <li><strong>Adresse :</strong> Mérignac, France</li>
            <li><strong>Email :</strong> <span className="text-red-500 font-medium">À COMPLÉTER</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>2. Données collectées</h2>
          <p>Lors de l'utilisation du formulaire de contact, les données suivantes sont collectées :</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Sujet et contenu du message</li>
          </ul>
          <p className="mt-3">
            Des données de navigation techniques (type de navigateur, pages visitées, durée de visite) peuvent également être collectées de façon anonyme via les outils d'hébergement, à des fins de mesure d'audience et de sécurité.
          </p>
          <p className="mt-2">Aucune donnée sensible (bancaire, médicale, biométrique…) n'est collectée.</p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>3. Finalité du traitement</h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li>Répondre à vos demandes de contact</li>
            <li>Établir des devis et propositions commerciales</li>
            <li>Assurer le suivi de la relation client</li>
            <li>Améliorer le fonctionnement et la sécurité du site</li>
          </ul>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>4. Base légale</h2>
          <p>Le traitement est fondé sur :</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li>votre <strong>consentement</strong>, lorsque vous remplissez le formulaire de contact ;</li>
            <li>l'<strong>intérêt légitime</strong> de Sea More Agency pour la gestion de sa relation commerciale et la sécurité de son site.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>5. Durée de conservation</h2>
          <p>Les données sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, sauf obligation légale ou comptable contraire imposant une durée plus longue.</p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>6. Partage et transfert des données</h2>
          <p>
            Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises à des prestataires techniques (hébergement, messagerie) dans le strict cadre de leur prestation, et soumis à des obligations de confidentialité.
          </p>
          <p className="mt-3">
            Le site est hébergé par Vercel Inc., société basée aux États-Unis. Ce transfert de données hors de l'Union européenne est encadré par des garanties appropriées (clauses contractuelles types de la Commission européenne et mécanismes de conformité propres à l'hébergeur), conformément aux articles 44 et suivants du RGPD.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>7. Vos droits</h2>
          <p>Conformément au RGPD (Règlement UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li><strong>Droit d'accès</strong> à vos données</li>
            <li><strong>Droit de rectification</strong> des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> (droit à l'oubli)</li>
            <li><strong>Droit à la limitation</strong> du traitement</li>
            <li><strong>Droit d'opposition</strong> au traitement</li>
            <li><strong>Droit à la portabilité</strong> de vos données</li>
            <li><strong>Droit de retirer votre consentement</strong> à tout moment</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous à l'adresse indiquée à l'article 1 de cette page.
          </p>
          <p className="mt-2">
            En cas de litige, et si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-brand-mid underline">www.cnil.fr</a>
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>8. Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement (navigation, sécurité, affichage), pour lesquels aucun consentement n'est requis.
          </p>
          <p className="mt-2">
            Aucun cookie publicitaire, de traçage tiers ou de mesure d'audience intrusive n'est déposé sans votre consentement préalable.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>9. Sécurité</h2>
          <p>
            Sea More Agency met en œuvre les mesures techniques et organisationnelles appropriées (connexion sécurisée HTTPS, hébergement par un prestataire reconnu, accès restreint aux données) pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>10. Modifications de la présente politique</h2>
          <p>
            Cette politique de confidentialité peut être mise à jour à tout moment, notamment pour se conformer à toute évolution réglementaire, jurisprudentielle ou technique. La date de dernière mise à jour figure en bas de page.
          </p>
        </div>

        <p className="text-[12px] text-brand-deep/40 pt-4 border-t border-brand-deep/10">
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </section>
  )
}
