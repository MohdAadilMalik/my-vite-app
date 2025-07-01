export interface CompanyInfo {
  name: string;
  description: string;
  icon?: {
    type: "text" | "image";
    value: string; // For 'text': single character, For 'image': URL
    bgColor?: string; // Background color for text icons
    textColor?: string; // Text color for text icons
  };
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  socialMedia: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  links: {
    about: string;
    privacy: string;
    terms: string;
    support: string;
  };
  upiId: string;
}

export const companyInfo: CompanyInfo = {
  name: "My",
  description:
    "Your trusted partner for sustainable and eco-friendly products. We're committed to making the world a better place, one purchase at a time.",
  icon: {
    type: "text",
    value: "E",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  address: {
    street: "123 Green Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    country: "USA",
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@ecoshop.com",
  },
  socialMedia: {
    facebook: "https://facebook.com/ecoshop",
    twitter: "https://twitter.com/ecoshop",
    instagram: "https://instagram.com/ecoshop",
    linkedin: "https://linkedin.com/company/ecoshop",
  },
  links: {
    about: "/about",
    privacy: "/privacy",
    terms: "/terms",
    support: "/support",
  },
  upiId: "ecoshop@paytm",
};
