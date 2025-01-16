// Informations de contact
export const contactInfo = {
    phone: {
        main: "+224 620 00 00 00",
        secondary: "+224 621 00 00 00"
    },
    email: {
        main: "contact@lassiri.com",
        support: "support@lassiri.com"
    },
    address: {
        street: "Rue KA 028",
        city: "Conakry",
        quarter: "Kaporo",
        country: "Guinée"
    },
    social: {
        facebook: "https://facebook.com/lassiri",
        instagram: "https://instagram.com/lassiri",
        twitter: "https://twitter.com/lassiri",
        linkedin: "https://linkedin.com/company/lassiri",
        whatsapp: "https://wa.me/224620000000"
    },
    hours: {
        weekdays: "08:00 - 18:00",
        saturday: "09:00 - 15:00",
        sunday: "Fermé"
    }
};

// Fonctions utilitaires pour récupérer les informations
export function getMainPhone() {
    return contactInfo.phone.main;
}

export function getMainEmail() {
    return contactInfo.email.main;
}

export function getFullAddress() {
    const { street, quarter, city, country } = contactInfo.address;
    return `${street}, ${quarter}, ${city}, ${country}`;
}

export function getSocialLinks() {
    return contactInfo.social;
}

export function getBusinessHours() {
    return contactInfo.hours;
}
