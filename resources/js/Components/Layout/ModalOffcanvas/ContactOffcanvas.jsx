// ContactOffcanvas.jsx
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { 
    getMainPhone, 
    getMainEmail, 
    getFullAddress, 
    getBusinessHours 
} from '@/Utils/Lassiri';

export default function ContactOffcanvas({ isOpen, onClose }) {
    const hours = getBusinessHours();

    return (
        <div className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}>
            
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Contactez-nous</h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                            <span className="sr-only">Fermer</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                        {/* Téléphone */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Phone className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Téléphone</p>
                                <a href={`tel:${getMainPhone()}`} 
                                   className="text-base font-medium text-gray-900 hover:text-primary-600">
                                    {getMainPhone()}
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Mail className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <a href={`mailto:${getMainEmail()}`} 
                                   className="text-base font-medium text-gray-900 hover:text-primary-600">
                                    {getMainEmail()}
                                </a>
                            </div>
                        </div>

                        {/* Adresse */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <MapPin className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Adresse</p>
                                <p className="text-base text-gray-900">
                                    {getFullAddress()}
                                </p>
                            </div>
                        </div>

                        {/* Horaires */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <Clock className="h-6 w-6 text-primary-600" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Horaires d'ouverture</p>
                                <div className="text-base text-gray-900">
                                    <p>Lun-Ven: {hours.weekdays}</p>
                                    <p>Samedi: {hours.saturday}</p>
                                    <p>Dimanche: {hours.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
