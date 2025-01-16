import { Building2, Users2, Target, Award, CheckCircle2, Rocket, Heart } from 'lucide-react';

export default function AboutOffcanvas({ isOpen, onClose }) {
    const features = [
        {
            name: "Expertise Technique",
            description: "Notre équipe possède une expertise approfondie dans le développement web et mobile.",
            icon: CheckCircle2
        },
        {
            name: "Innovation Continue",
            description: "Nous restons à la pointe de la technologie pour offrir les meilleures solutions.",
            icon: Rocket
        },
        {
            name: "Support Client",
            description: "Un accompagnement personnalisé tout au long de votre projet.",
            icon: Heart
        }
    ];

    return (
        <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}>
            
            <div className="h-full flex flex-col">
                <div className="px-6 py-4 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-900">À propos de nous</h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                            <span className="sr-only">Fermer</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="p-6 space-y-8">
                        {/* Section Introduction */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Building2 className="h-6 w-6 text-primary-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Notre Histoire</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Fondée en 2023, Lassiri est née de la vision de créer des solutions numériques innovantes 
                                pour les entreprises guinéennes. Notre engagement envers l'excellence et l'innovation nous 
                                permet de fournir des services de qualité supérieure.
                            </p>
                        </div>

                        {/* Section Mission */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Target className="h-6 w-6 text-primary-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Notre Mission</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Accompagner les entreprises dans leur transformation digitale en proposant des solutions 
                                sur mesure, innovantes et performantes. Nous nous engageons à créer de la valeur pour 
                                nos clients à travers des services de qualité.
                            </p>
                        </div>

                        {/* Section Caractéristiques */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Award className="h-6 w-6 text-primary-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Nos Points Forts</h3>
                            </div>
                            <div className="grid gap-4">
                                {features.map((feature) => (
                                    <div key={feature.name} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                                        <feature.icon className="h-5 w-5 text-primary-600 mt-0.5" />
                                        <div>
                                            <h4 className="font-medium text-gray-900">{feature.name}</h4>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Section Équipe */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Users2 className="h-6 w-6 text-primary-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Notre Équipe</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Notre équipe est composée de talents passionnés et expérimentés, unis par la volonté 
                                d'excellence et d'innovation. Chaque membre apporte son expertise unique pour créer 
                                des solutions qui dépassent les attentes de nos clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 