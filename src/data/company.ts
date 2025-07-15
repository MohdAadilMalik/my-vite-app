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
  name: "A B N Heating System",
  description:
    "Your trusted partner for sustainable and eco-friendly products. We're committed to making the world a better place, one purchase at a time.",
  icon: {
    type: "text",
    value: "ABN",
    bgColor: "bg-primary",
    textColor: "text-white",
  },
  //H. No. 150, G/F KH .No. 1/1/2, Block-A, Gali No.5,Guru, Nanak Nagar Mustfabad, New Mustafabad, New Delhi-110094, Delhi, India
  address: {
    street: "150, G/F KH .No. 1/1/2, Block-A, Gali No.5,Guru, Nanak Nagar Mustfabad, New Mustafabad, New Delhi-110094, Delhi, India",
    city: "New Delhi",
    state: "Delhi",
    zipCode: "110094",
    country: "India",
  },
  contact: {
    phone: "+91 8048956186",
    email: "info@abnheatingsystem.com",
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
  upiId: "8048956186@paytm",
};
