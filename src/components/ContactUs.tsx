import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { contactInfo } from "@/data/contact";
import { useLanguage } from "@/contexts/LanguageContext";

function ContactUs() {
  const { t } = useLanguage();

  const socialPlatforms = [
    {
      name: "Facebook",
      icon: Facebook,
      url: contactInfo.socialMedia.facebook.url,
      qrCode: contactInfo.socialMedia.facebook.qrCode,
      color: "text-blue-600",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: contactInfo.socialMedia.twitter.url,
      qrCode: contactInfo.socialMedia.twitter.qrCode,
      color: "text-sky-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: contactInfo.socialMedia.instagram.url,
      qrCode: contactInfo.socialMedia.instagram.qrCode,
      color: "text-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: contactInfo.socialMedia.linkedin.url,
      qrCode: contactInfo.socialMedia.linkedin.qrCode,
      color: "text-blue-700",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("contactUs")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contactDesc")}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{contactInfo.email}</p>
                <Button variant="outline" asChild>
                  <a href={`mailto:${contactInfo.email}`}>Send Email</a>
                </Button>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
               {/* add QR code so user can scan and call automatically simiraly as whatsapp*/}
                 <div className="bg-white p-4 rounded-lg border inline-block mb-4">
                  <img
                    src={contactInfo.phone}
                    alt="Phone QR Code"
                    className="w-48 h-48"
                  />
                </div>
              <CardContent>
                <p className="text-gray-600 mb-4">{contactInfo.phone}</p>
                <Button variant="outline" asChild>
                  <a href={`tel:${contactInfo.phone}`}>Call Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {contactInfo.address.street}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.state}{" "}
                  {contactInfo.address.zipCode}
                  <br />
                  {contactInfo.address.country}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* WhatsApp Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {t("whatsapp")}
            </h2>
            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">
                  {t("whatsapp")}
                </CardTitle>
                <CardDescription>{t("scanQR")}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white p-4 rounded-lg border inline-block mb-4">
                  <img
                    src={contactInfo.whatsapp.qrCode}
                    alt="WhatsApp QR Code"
                    className="w-48 h-48"
                  />
                </div>
                <p className="text-gray-600 mb-4">
                  {contactInfo.whatsapp.number}
                </p>
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.number.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
           
          {/* Social Media Section */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              {t("followUs")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <Card key={platform.name} className="text-center">
                    <CardHeader>
                      <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent
                          className={`h-8 w-8 ${platform.color}`}
                        />
                      </div>
                      <CardTitle className={platform.color}>
                        {platform.name}
                      </CardTitle>
                      <CardDescription>{t("scanQR")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-white p-3 rounded-lg border inline-block mb-4">
                        <img
                          src={platform.qrCode}
                          alt={`${platform.name} QR Code`}
                          className="w-32 h-32"
                        />
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit {platform.name}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/*add a map section below for location show the map of the location
      use this address direct 
      B-150 steert no 06 , Bhagirathi vihar phase 2, New Mustafabad, New Delhi-110094, Delhi, India*/}
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">  {t("location")}</h2>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.123456!2d77.123456!3d28.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4b4b4b4b4b%3A0x1234567890123456!2sB-150%2C%20Steet%20No.%2006%2C%20Bhagirathi%20Vihar%20Phase%202%2C%20New%20Mustafabad%2C%20New%20Delhi-110094%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1694666666666!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default ContactUs;
