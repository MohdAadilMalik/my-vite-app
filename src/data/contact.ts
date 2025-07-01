export interface ContactInfo {
  whatsapp: {
    number: string;
    qrCode: string;
  };
  socialMedia: {
    facebook: {
      url: string;
      qrCode: string;
    };
    twitter: {
      url: string;
      qrCode: string;
    };
    instagram: {
      url: string;
      qrCode: string;
    };
    linkedin: {
      url: string;
      qrCode: string;
    };
  };
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export const contactInfo: ContactInfo = {
  whatsapp: {
    number: "+1-555-123-4567",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/15551234567",
  },
  socialMedia: {
    facebook: {
      url: "https://facebook.com/ecoshop",
      qrCode:
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://facebook.com/ecoshop",
    },
    twitter: {
      url: "https://twitter.com/ecoshop",
      qrCode:
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://twitter.com/ecoshop",
    },
    instagram: {
      url: "https://instagram.com/ecoshop",
      qrCode:
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://instagram.com/ecoshop",
    },
    linkedin: {
      url: "https://linkedin.com/company/ecoshop",
      qrCode:
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linkedin.com/company/ecoshop",
    },
  },
  email: "hello@ecoshop.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Green Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    country: "USA",
  },
};
