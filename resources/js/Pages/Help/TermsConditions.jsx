import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function TermsConditions() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
          
          <p className="text-gray-600 mb-8">
            En utilisant les services de Lassiri, vous acceptez les présentes conditions générales d'utilisation. 
            Veuillez les lire attentivement avant d'utiliser nos services.
          </p>

          <div className="space-y-8">
            {/* 1. DÉFINITIONS */}
            <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Définitions
            </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Lassiri :</strong> désigne la plateforme de paiement et ses services associés
                </li>
                <li>
                  <strong>Utilisateur :</strong> toute personne utilisant les services Lassiri
                </li>
                <li>
                  <strong>Services :</strong> ensemble des fonctionnalités proposées par Lassiri
                </li>
                <li>
                  <strong>Compte :</strong> espace personnel de l'utilisateur sur la plateforme
                </li>
              </ul>
            </section>

            {/* 2. INSCRIPTION ET COMPTE */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Inscription et Compte
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Être âgé d'au moins 18 ans</li>
                <li>Fournir des informations exactes et à jour</li>
                <li>Maintenir la confidentialité de vos identifiants</li>
                <li>Un seul compte par personne est autorisé</li>
                <li>Signaler immédiatement toute utilisation non autorisée</li>
              </ul>
            </section>

            {/* 3. SERVICES */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Services
              </h2>
              <p className="text-gray-600 mb-4">
                Lassiri propose les services suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Paiements mobiles</li>
                <li>Transferts d'argent</li>
                <li>Recharges téléphoniques</li>
                <li>Paiement de factures</li>
                <li>Services marchands</li>
              </ul>
            </section>

            {/* 4. TARIFICATION */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Tarification
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Les frais sont clairement indiqués avant chaque transaction</li>
                <li>Les tarifs peuvent être modifiés avec notification préalable</li>
                <li>Certains services peuvent être gratuits</li>
                <li>Les frais sont non remboursables sauf erreur technique</li>
              </ul>
            </section>

            {/* 5. RESPONSABILITÉS */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Responsabilités
              </h2>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-xl font-medium">Responsabilités de l'utilisateur :</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utiliser le service conformément aux lois</li>
                  <li>Protéger ses identifiants de connexion</li>
                  <li>Vérifier les informations avant chaque transaction</li>
                  <li>Maintenir des fonds suffisants pour les transactions</li>
                </ul>

                <h3 className="text-xl font-medium mt-6">Responsabilités de Lassiri :</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Assurer la disponibilité des services</li>
                  <li>Protéger les données des utilisateurs</li>
                  <li>Traiter les transactions de manière sécurisée</li>
                  <li>Fournir un support client réactif</li>
                </ul>
            </div>
          </section>

            {/* 6. SÉCURITÉ */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Sécurité
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Authentification à deux facteurs obligatoire</li>
                <li>Surveillance des transactions suspectes</li>
                <li>Cryptage des données sensibles</li>
                <li>Verrouillage automatique après tentatives échouées</li>
              </ul>
            </section>

            {/* 7. RÉSILIATION */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Résiliation
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>L'utilisateur peut résilier son compte à tout moment</li>
                <li>Lassiri peut suspendre ou fermer un compte en cas d'infraction</li>
                <li>Les fonds seront restitués selon la procédure légale</li>
                <li>Certaines obligations survivent à la résiliation</li>
              </ul>
            </section>

            {/* 8. MODIFICATIONS */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Modifications
            </h2>
              <p className="text-gray-600">
                Lassiri se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront 
                informés des modifications importantes par email ou notification dans l'application.
              </p>
            </section>

            {/* 9. CONTACT */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contact
              </h2>
              <p className="text-gray-600">
                Pour toute question concernant ces conditions, contactez-nous :
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">
                  Email : support@lassiri.com<br />
                  Téléphone : +224 XXX XXX XXX<br />
                  Adresse : [Adresse de Lassiri en Guinée]
              </p>
            </div>
          </section>

            {/* 10. MISE À JOUR */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Mise à Jour
            </h2>
              <p className="text-gray-600">
                Ces conditions générales d'utilisation peuvent être mises à jour périodiquement. 
                La dernière version sera toujours disponible sur notre site web.
              </p>
              <p className="text-gray-600 mt-4">
                <strong>Dernière mise à jour :</strong> 15 Mars 2024<br />
                <strong>Version :</strong> 1.0
              </p>
            </section>
            </div>
        </div>
      </div>
    </AppLayout>
  );
}

