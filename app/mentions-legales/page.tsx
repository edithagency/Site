import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Edith Agency',
  description: 'Mentions légales du site Edith Agency.',
}

export default function MentionsLegalesPage() {
  return (
    <section className="pt-40 pb-32 px-8 max-w-3xl">
      <p className="eyebrow mb-6">Informations légales</p>
      <h1 className="font-display font-black text-brand-deep mb-16"
          style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
        Mentions légales
      </h1>

      <div className="space-y-12 font-body text-[14px] text-brand-deep/80 leading-relaxed">

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">1. Éditeur du site</h2>
          <p>Le site <strong>edithagency.fr</strong> est édité par :</p>
          <ul className="mt-3 space-y-1 pl-4">
            <li><strong>Nom & prénom :</strong> <span className="text-red-500 font-medium">À RÉDIGER</span></li>
            <li><strong>Statut :</strong> Auto-entrepreneur</li>
            <li><strong>SIRET :</strong> <span className="text-red-500 font-medium">À RÉDIGER</span></li>
            <li><strong>Adresse :</strong> <span className="text-red-500 font-medium">À RÉDIGER</span> — Bordeaux, France</li>
            <li><strong>Email :</strong> hello@edithagency.fr</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">2. Hébergeur</h2>
          <ul className="space-y-1 pl-4">
            <li><strong>Hébergeur :</strong> Vercel Inc. (ou Hostinger — <span className="text-red-500 font-medium">À PRÉCISER selon votre choix</span>)</li>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li><strong>Site :</strong> vercel.com</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">3. Propriété intellectuelle</h2>
          <p>L'ensemble du contenu de ce site (textes, images, visuels, logo) est la propriété exclusive d'Edith Agency, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">4. Responsabilité</h2>
          <p>Edith Agency s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation de ce site se fait sous la responsabilité de l'utilisateur.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">5. Données personnelles</h2>
          <p>Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : <a href="mailto:hello@edithagency.fr" className="text-brand-mid underline">hello@edithagency.fr</a>.</p>
          <p className="mt-2">Pour plus d'informations, consultez notre <a href="/politique-de-confidentialite" className="text-brand-mid underline">Politique de confidentialité</a>.</p>
        </div>

        <div>
          <h2 className="font-display font-bold text-brand-deep text-xl mb-4">6. Cookies</h2>
          <p>Ce site n'utilise pas de cookies de traçage ou publicitaires. Des cookies techniques nécessaires au fonctionnement du site peuvent être déposés.</p>
        </div>

        <p className="text-[12px] text-brand-deep/40 pt-4 border-t border-brand-deep/10">
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </section>
  )
}
