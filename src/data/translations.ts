export interface Translation {
  [key: string]: string;
}

export interface Language {
  code: string;
  name: string;
  flag: string;
  translations: Translation;
}

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇺🇸",
    translations: {
      // Navigation
      home: "Home",
      about: "About",
      products: "Products",
      cart: "Cart",
      contact: "Contact Us",

      // Common
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      outOfStock: "Out of Stock",
      price: "Price",
      quantity: "Quantity",
      total: "Total",
      checkout: "Checkout",

      // Home page
      discoverAmazing: "Discover Amazing",
      productsText: "Products",
      shopLatestTrends:
        "Shop the latest trends with our curated collection of high-quality products. From electronics to fashion, find everything you need in one place.",
      shopNow: "Shop Now",
      learnMore: "Learn More",
      featuredProducts: "Featured Products",
      viewAllProducts: "View All Products",

      // Features
      freeShipping: "Free Shipping",
      freeShippingDesc: "Free shipping on orders over $50",
      securePayment: "Secure Payment",
      securePaymentDesc: "Your payment information is safe",
      support247: "24/7 Support",
      supportDesc: "Get help whenever you need it",

      // Cart
      yourCart: "Your Cart",
      emptyCart: "Your cart is empty",
      continueShopping: "Continue Shopping",
      removeFromCart: "Remove from Cart",

      // Contact
      contactUs: "Contact Us",
      getInTouch: "Get in Touch",
      contactDesc:
        "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      followUs: "Follow Us",
      scanQR: "Scan QR Code",
      whatsapp: "WhatsApp",

      // Buy Now
      orderSummary: "Order Summary",
      customerDetails: "Customer Details",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      paymentQR: "Payment QR Code",
      scanToPay: "Scan this QR code to complete your payment",
      orderTotal: "Order Total",
    },
  },
  {
    code: "hi",
    name: "हिंदी",
    flag: "🇮🇳",
    translations: {
      // Navigation
      home: "होम",
      about: "हमारे बारे में",
      products: "उत्पाद",
      cart: "कार्ट",
      contact: "संपर्क करें",

      // Common
      addToCart: "कार्ट में जोड़ें",
      buyNow: "अभी खरीदें",
      outOfStock: "स्टॉक में नहीं",
      price: "कीमत",
      quantity: "मात्रा",
      total: "कुल",
      checkout: "चेकआउट",

      // Home page
      discoverAmazing: "अद्भुत खोजें",
      productsText: "उत्पाद",
      shopLatestTrends:
        "उच्च गुणवत्ता वाले उत्पादों के हमारे संग्रह के साथ नवीनतम रुझानों की खरीदारी करें। इलेक्ट्रॉनिक्स से लेकर फैशन तक, एक ही स्थान पर आपकी हर जरूरत पाएं।",
      shopNow: "अभी खरीदारी करें",
      learnMore: "और जानें",
      featuredProducts: "विशेष उत्पाद",
      viewAllProducts: "सभी उत्पाद देखें",

      // Features
      freeShipping: "मुफ्त शिपिंग",
      freeShippingDesc: "$50 से अधिक के ऑर्डर पर मुफ्त शिपिंग",
      securePayment: "सुरक्षित भुगतान",
      securePaymentDesc: "आपकी भुगतान जानकारी सुरक्षित है",
      support247: "24/7 सहायता",
      supportDesc: "जब भी आपको जरूरत हो मदद पाएं",

      // Cart
      yourCart: "आपका कार्ट",
      emptyCart: "आपका कार्ट खाली है",
      continueShopping: "खरीदारी जारी रखें",
      removeFromCart: "कार्ट से हटाएं",

      // Contact
      contactUs: "संपर्क करें",
      getInTouch: "संपर्क में रहें",
      contactDesc:
        "हम आपसे सुनना पसंद करेंगे। हमें एक संदेश भेजें और हम जल्द से जल्द जवाब देंगे।",
      followUs: "हमें फॉलो करें",
      scanQR: "QR कोड स्कैन करें",
      whatsapp: "व्हाट्सऐप",

      // Buy Now
      orderSummary: "ऑर्डर सारांश",
      customerDetails: "ग्राहक विवरण",
      fullName: "पूरा नाम",
      email: "ईमेल",
      phone: "फोन",
      address: "पता",
      paymentQR: "भुगतान QR कोड",
      scanToPay: "अपना भुगतान पूरा करने के लिए इस QR कोड को स्कैन करें",
      orderTotal: "ऑर्डर कुल",
    },
  },
  {
    code: "ur",
    name: "اردو",
    flag: "🇵🇰",
    translations: {
      // Navigation
      home: "ہوم",
      about: "ہمارے بارے میں",
      products: "پروڈکٹس",
      cart: "کارٹ",
      contact: "رابطہ کریں",

      // Common
      addToCart: "کارٹ میں شامل کریں",
      buyNow: "ابھی خریدیں",
      outOfStock: "اسٹاک میں نہیں",
      price: "قیمت",
      quantity: "مقدار",
      total: "کل",
      checkout: "چیک آؤٹ",

      // Home page
      discoverAmazing: "حیرت انگیز دریافت کریں",
      productsText: "پروڈکٹس",
      shopLatestTrends:
        "اعلیٰ معیار کے پروڈکٹس کے ہمارے منتخب کردہ مجموعے کے ساتھ جدید ترین رجحانات کی خریداری کریں۔ الیکٹرانکس سے لے کر فیشن تک، ایک ہی جگہ آپ کی ہر ضرورت تلاش کریں۔",
      shopNow: "ابھی خریداری کریں",
      learnMore: "مزید جانیں",
      featuredProducts: "خصوصی پروڈکٹس",
      viewAllProducts: "تمام پروڈکٹس دیکھیں",

      // Features
      freeShipping: "مفت شپنگ",
      freeShippingDesc: "$50 سے زیادہ کے آرڈرز پر مفت شپنگ",
      securePayment: "محفوظ ادائیگی",
      securePaymentDesc: "آپ کی ادائیگی کی معلومات محفوظ ہیں",
      support247: "24/7 سپورٹ",
      supportDesc: "جب بھی آپ کو ضرورت ہو مدد حاصل کریں",

      // Cart
      yourCart: "آپ کا کارٹ",
      emptyCart: "آپ کا کارٹ خالی ہے",
      continueShopping: "خریداری جاری رکھیں",
      removeFromCart: "کارٹ سے ہٹائیں",

      // Contact
      contactUs: "رابطہ کریں",
      getInTouch: "رابطے میں رہیں",
      contactDesc:
        "ہم آپ سے سننا پسند کریں گے۔ ہمیں پیغام بھیجیں اور ہم جلد از جلد جواب دیں گے۔",
      followUs: "ہمیں فالو کریں",
      scanQR: "QR کوڈ اسکین کریں",
      whatsapp: "واٹس ایپ",

      // Buy Now
      orderSummary: "آرڈر کا خلاصہ",
      customerDetails: "کسٹمر کی تفصیلات",
      fullName: "پورا نام",
      email: "ای میل",
      phone: "فون",
      address: "پتہ",
      paymentQR: "ادائیگی QR کوڈ",
      scanToPay: "اپنی ادائیگی مکمل کرنے کے لیے اس QR کوڈ کو اسکین کریں",
      orderTotal: "آرڈر کل",
    },
  },
  {
    code: "ar",
    name: "العربية",
    flag: "🇦🇪",
    translations: {
      // Navigation
      home: "الرئيسية",
      about: "حولنا",
      products: "المنتجات",
      cart: "السلة",
      contact: "اتصل بنا",

      // Common
      addToCart: "أضف إلى السلة",
      buyNow: "اشتري الآن",
      outOfStock: "غير متوفر",
      price: "السعر",
      quantity: "الكمية",
      total: "المجموع",
      checkout: "الدفع",

      // Home page
      discoverAmazing: "اكتشف منتجات",
      productsText: "مذهلة",
      shopLatestTrends:
        "تسوق أحدث الاتجاهات مع مجموعتنا المختارة من المنتجات عالية الجودة. من الإلكترونيات إلى الأزياء، اعثر على كل ما تحتاجه في مكان واحد.",
      shopNow: "تسوق الآن",
      learnMore: "اعرف المزيد",
      featuredProducts: "المنتجات المميزة",
      viewAllProducts: "عرض جميع المنتجات",

      // Features
      freeShipping: "شحن مجاني",
      freeShippingDesc: "شحن مجاني للطلبات أكثر من 50 دولار",
      securePayment: "دفع آمن",
      securePaymentDesc: "معلومات الدفع الخاصة بك آمنة",
      support247: "دعم 24/7",
      supportDesc: "احصل على المساعدة متى احتجتها",

      // Cart
      yourCart: "سلتك",
      emptyCart: "سلتك فارغة",
      continueShopping: "متابعة التسوق",
      removeFromCart: "إزالة من السلة",

      // Contact
      contactUs: "اتصل بنا",
      getInTouch: "تواصل معنا",
      contactDesc: "نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت ممكن.",
      followUs: "تابعنا",
      scanQR: "امسح رمز الاستجابة السريعة",
      whatsapp: "واتساب",

      // Buy Now
      orderSummary: "ملخص الطلب",
      customerDetails: "تفاصيل العميل",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      address: "العنوان",
      paymentQR: "رمز الدفع السريع",
      scanToPay: "امسح هذا الرمز لإكمال الدفع",
      orderTotal: "إجمالي الطلب",
    },
  },
];
