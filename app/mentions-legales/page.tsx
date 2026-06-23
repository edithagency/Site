import type { Metadata } from 'next'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Mentions légales — Sea More Agency',
  description: 'Mentions légales du site Sea More Agency.',
}

export default function MentionsLegalesPage() {
  return (
    <section className="relative pt-40 pb-32 px-8 max-w-5xl">
      <BackButton />
      <p className="eyebrow mb-6">Informations légales</p>
      <h1 className="text-brand-deep mb-16"
          style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(36px, 5vw, 56px)' }}>
        Mentions légales
      </h1>

      <div className="space-y-12 font-poppins text-[14px] text-brand-deep/80 leading-relaxed">

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>1. Éditeur du site</h2>
          <p>Le site <strong>seamoreagency.com</strong> est édité par :</p>
          <ul className="mt-3 space-y-1 pl-4">
            <li><strong>Nom commercial :</strong> Sea More Agency</li>
            <li><strong>Nom et prénom de l'exploitant :</strong> Apouey Edith</li>
            <li><strong>Statut juridique :</strong> Auto-entrepreneur</li>
            <li><strong>SIRET :</strong> 904 070 372 00027</li>
            <li><strong>Adresse du siège :</strong> Mérignac, France</li>
            <li><strong>Email :</strong> <a href="mailto:contact@seamoreagency.com" className="text-brand-mid underline">contact@seamoreagency.com</a></li>
            <li><strong>Responsable de la publication :</strong> Apouey Edith</li>
          </ul>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>2. Hébergement</h2>
          <ul className="space-y-1 pl-4">
            <li><strong>Hébergeur :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li><strong>Site web :</strong> <a href="https://vercel.com" className="text-brand-mid underline">vercel.com</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu présent sur le site seamoreagency.com (textes, images, graphismes, logo, identité visuelle, structure, code) est protégé par le droit de la propriété intellectuelle.
          </p>
          <p className="mt-2">
            Sauf mention contraire, ces éléments sont la propriété exclusive de Sea More Agency. Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable.
          </p>
          <p className="mt-2">
            Toute utilisation non autorisée du site ou de son contenu engage la responsabilité de son auteur et pourra faire l'objet de poursuites.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>4. Responsabilité</h2>
          <p>
            Sea More Agency s'efforce de fournir sur le site seamoreagency.com des informations aussi précises et à jour que possible.
          </p>
          <p className="mt-2">
            Cependant, l'éditeur ne saurait être tenu responsable des omissions, inexactitudes ou carences dans la mise à jour des informations, qu'elles soient de son fait ou du fait de tiers partenaires.
          </p>
          <p className="mt-2">
            L'utilisation du site se fait sous l'entière responsabilité de l'utilisateur.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>5. Données personnelles (RGPD)</h2>
          <p>
            Les données personnelles éventuellement collectées via le formulaire de contact (nom, email, message) sont uniquement utilisées afin de répondre aux demandes des utilisateurs.
          </p>
          <p className="mt-2">
            Ces données ne sont ni vendues, ni cédées, ni transmises à des tiers.
          </p>
          <p className="mt-2">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul className="mt-3 space-y-1 pl-4 list-disc">
            <li>droit d'accès</li>
            <li>droit de rectification</li>
            <li>droit de suppression</li>
            <li>droit d'opposition au traitement</li>
          </ul>
          <p className="mt-2">
            Vous pouvez exercer ces droits en écrivant à l'adresse indiquée à l'article 1 des présentes mentions légales.
          </p>
          <p className="mt-2">
            Pour plus d'informations, consultez notre <a href="/politique-de-confidentialite" className="text-brand-mid underline">Politique de confidentialité</a>.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>6. Cookies</h2>
          <p>
            Le site peut utiliser des cookies strictement nécessaires à son bon fonctionnement (navigation, sécurité, affichage).
          </p>
          <p className="mt-2">
            Aucun cookie publicitaire ou de suivi marketing n'est utilisé sans consentement préalable.
          </p>
        </div>

        <div>
          <h2 className="text-brand-deep text-2xl mb-4" style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}>7. Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
          </p>
        </div>

        <p className="text-[12px] text-brand-deep/40 pt-4 border-t border-brand-deep/10">
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </section>
  )
}
