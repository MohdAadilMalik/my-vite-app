import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageCircle, Mail, Phone } from "lucide-react";
import { CartItem } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { companyInfo } from "@/data/company";
import { contactInfo } from "@/data/contact";

interface BuyNowProps {
  items: CartItem[];
  onBack: () => void;
}

interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
}

function BuyNow({ items, onBack }: BuyNowProps) {
  const { t } = useLanguage();
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [showPayment, setShowPayment] = useState(false);

  const totalPrice = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      customerDetails.fullName &&
      customerDetails.email &&
      customerDetails.phone &&
      customerDetails.address
    ) {
      setShowPayment(true);
    }
  };

  const generateOrderSummary = () => {
    const itemsList = items
      .map((item) => {
        const sizeInfo = item.product.selectedSize
          ? ` (Size: ${item.product.selectedSize})`
          : "";
        return `${item.product.name}${sizeInfo} - Qty: ${item.quantity} × ${item.product.price} = ${(
          item.product.price * item.quantity
        ).toFixed(2)}`;
      })
      .join("\n");

    return `Order Summary:\n\n${itemsList}\n\nSubtotal: ${totalPrice.toFixed(2)}\nShipping: Free\nTotal: ${totalPrice.toFixed(2)}\n\nCustomer Details:\nName: ${customerDetails.fullName}\nEmail: ${customerDetails.email}\nPhone: ${customerDetails.phone}\nAddress: ${customerDetails.address}\n\nThank you for your order!`;
  };

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(generateOrderSummary());
    const whatsappNumber = contactInfo.whatsapp.number.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Order Summary - ${companyInfo.name}`);
    const body = encodeURIComponent(generateOrderSummary());
    window.open(
      `mailto:${contactInfo.email}?subject=${subject}&body=${body}`,
      "_blank",
    );
  };

  const handleSMSShare = () => {
    const message = encodeURIComponent(generateOrderSummary());
    const phoneNumber = contactInfo.phone.replace(/[^0-9]/g, "");
    window.open(`sms:${phoneNumber}?body=${message}`, "_blank");
  };

  const orderDescription = items
    .map((item) => {
      const sizeInfo = item.product.selectedSize
        ? ` (${item.product.selectedSize})`
        : "";
      return `${item.product.name}${sizeInfo} x${item.quantity}`;
    })
    .join(", ");

  const paymentQRCode = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=upi://pay?pa=${companyInfo.upiId}&pn=${companyInfo.name}&am=${totalPrice.toFixed(2)}&cu=USD&tn=Order: ${orderDescription} - ${customerDetails.fullName}`;

  if (showPayment) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            onClick={() => setShowPayment(false)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Details
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment QR Code */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t("paymentQR")}</CardTitle>
                <CardDescription>{t("scanToPay")}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-white p-4 rounded-lg border inline-block">
                  <img
                    src={paymentQRCode}
                    alt="Payment QR Code"
                    className="w-64 h-64 mx-auto"
                  />
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    {t("orderTotal")}: ${totalPrice.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    UPI ID: {companyInfo.upiId}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-center">
                    Share Order Details
                  </h4>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={handleWhatsAppShare}
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 text-green-600 border-green-600 hover:bg-green-50"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Share on WhatsApp
                    </Button>
                    <Button
                      onClick={handleEmailShare}
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      <Mail className="h-4 w-4" />
                      Share via Email
                    </Button>
                    <Button
                      onClick={handleSMSShare}
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 text-purple-600 border-purple-600 hover:bg-purple-50"
                    >
                      <Phone className="h-4 w-4" />
                      Share via SMS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>{t("orderSummary")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="flex items-center space-x-3"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <div className="font-medium">{item.product.name}</div>
                        {(item.product as any).selectedSize && (
                          <div className="text-xs text-blue-600 font-medium">
                            Size: {(item.product as any).selectedSize}
                          </div>
                        )}
                        <div className="text-sm text-gray-600">
                          {t("quantity")}: {item.quantity} × $
                          {item.product.price}
                        </div>
                      </div>
                      <div className="font-bold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2">
                      <span>{t("total")}:</span>
                      <span className="text-primary">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">{t("customerDetails")}</h4>
                  <div className="text-sm space-y-1">
                    <div>
                      <strong>Name:</strong> {customerDetails.fullName}
                    </div>
                    <div>
                      <strong>Email:</strong> {customerDetails.email}
                    </div>
                    <div>
                      <strong>Phone:</strong> {customerDetails.phone}
                    </div>
                    <div>
                      <strong>Address:</strong> {customerDetails.address}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Customer Details Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t("customerDetails")}</CardTitle>
              <CardDescription>
                Please fill in your details to complete the order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">{t("fullName")}</Label>
                  <Input
                    id="fullName"
                    type="text"
                    value={customerDetails.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={customerDetails.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t("phone")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={customerDetails.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="address">{t("address")}</Label>
                  <Textarea
                    id="address"
                    value={customerDetails.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    required
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Proceed to Payment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>{t("orderSummary")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="flex items-center space-x-3"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{item.product.name}</div>
                      {(item.product as any).selectedSize && (
                        <div className="text-xs text-blue-600 font-medium">
                          Size: {(item.product as any).selectedSize}
                        </div>
                      )}
                      <div className="text-sm text-gray-600">
                        {t("quantity")}: {item.quantity} × ${item.product.price}
                      </div>
                    </div>
                    <div className="font-bold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span>{t("total")}:</span>
                    <span className="text-primary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
