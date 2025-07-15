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
//add a default message to whatsapp like Hello ABN Heating System I want to buy a product.
export const contactInfo: ContactInfo = {
  whatsapp: {
    number: "+918048956186",
    qrCode:
      "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/+918048956186?text=Hello ABN Heating System I want to buy a product.",
  },
  socialMedia: {
    facebook: {
      url: "https://facebook.com/abnheatingsystem",
      qrCode:
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://facebook.com/abnheatingsystem",
    },
    twitter: {
      url: "https://twitter.com/abnheatingsystem",
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
  email: "info@abnheatingsystem.com",
  phone: "+91 8048956186",
  address: {
    street: "150, G/F KH .No. 1/1/2, Block-A, Gali No.5,Guru, Nanak Nagar Mustfabad, New Mustafabad, New Delhi-110094, Delhi, India",
    city: "New Delhi",
    state: "Delhi",
    zipCode: "110094",
    country: "India",
  },
};
