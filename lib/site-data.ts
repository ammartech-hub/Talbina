export const WHATSAPP_ORDERS = '918369100215'
export const WHATSAPP_SUPPORT = '919892440226'

export const whatsappLink = (phone: string, message?: string) =>
  `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const navLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'No Added Sugar',
  '100% Natural',
  'Ready in 5 Minutes',
  'No Preservatives',
  'Rich in Dry Fruits',
  'Goodness of Wheat',
  'Immunity Booster',
  'No Synthetic Colours',
]

export const benefits = [
  {
    icon: 'shield-check',
    title: 'Boosts Immunity',
    text: 'Nourishing wheat & dry fruits to support an active lifestyle.',
  },
  {
    icon: 'sparkles',
    title: 'Easy to Digest',
    text: "A light, comforting bowl that's gentle for the whole family.",
  },
  {
    icon: 'zap',
    title: 'Rich in Energy',
    text: '410 kcal per serving to fuel your day, right from breakfast.',
  },
  {
    icon: 'heart-pulse',
    title: 'Heart Healthy',
    text: 'Made with wholesome grains and real dry fruits.',
  },
  {
    icon: 'leaf',
    title: '100% Natural',
    text: 'No synthetic colours, no artificial flavours — nothing to hide.',
  },
  {
    icon: 'ban',
    title: 'No Preservatives',
    text: 'No added sugar and no preservatives. Just honest goodness.',
  },
] as const

export const nutrition = [
  { value: '410', unit: 'kcal', label: 'Energy' },
  { value: '9.5', unit: 'g', label: 'Protein' },
  { value: '3.7', unit: 'g', label: 'Fat' },
  { value: '76', unit: 'g', label: 'Carbohydrate' },
]

export const products = [
  {
    slug: 'milk-mawa',
    kicker: 'Rich, Creamy & Indulgent',
    name: 'Talbeena Milk Mawa',
    image: '/products/milk-mawa.jpg',
    description:
      'A creamy wheat & dry-fruit porridge with the classic taste of milk and mawa — a warm, wholesome bowl ready in just 5 minutes.',
    points: [
      'Wholesome source of daily energy',
      'Made with the goodness of wheat & dry fruits',
      'No added sugar & no preservatives',
    ],
    price: '₹299',
  },
  {
    slug: 'rabdi',
    kicker: 'The Taste of Traditional Rabdi',
    name: 'Talbeena Rabdi',
    image: '/products/rabdi.jpg',
    description:
      'The nostalgic flavour of slow-cooked rabdi in a nourishing wheat & dry-fruit porridge — indulgent taste, honest ingredients.',
    points: [
      'Comforting, easy-to-enjoy bowl',
      'Goodness of wheat & real dry fruits',
      'No synthetic colours or preservatives',
    ],
    price: '₹299',
  },
  {
    slug: 'elaichi',
    kicker: 'Fragrant Cardamom Warmth',
    name: 'Talbeena Elaichi',
    image: '/products/elaichi.jpg',
    description:
      'Aromatic green cardamom meets wheat & dry fruits for a fragrant, soothing porridge that feels like a warm hug in a bowl.',
    points: [
      'Fragrant, soothing everyday bowl',
      'Wheat & dry fruits for lasting energy',
      'No added sugar & 100% natural',
    ],
    price: '₹299',
  },
]

export const certifications = [
  { icon: 'shield-check', label: 'ISO Certified' },
  { icon: 'award', label: 'GMP Certified' },
  { icon: 'badge-check', label: 'FSSAI Licensed' },
  { icon: 'flask-conical', label: 'NABL Tested' },
]

export const whyChoose = [
  {
    number: '01',
    title: 'Rooted in tradition',
    text: 'Talbeena is a time-honoured porridge of wheat and dry fruits, cherished across generations. We bring it to your kitchen — authentic in spirit, effortless to make.',
  },
  {
    number: '02',
    title: 'Honest ingredients only',
    text: 'No added sugar, no preservatives, no synthetic colours and no artificial flavours. Every box is made with the goodness of wheat and real dry fruits.',
  },
  {
    number: '03',
    title: 'Ready in five minutes',
    text: "A warm, wholesome bowl shouldn't take effort. Just add hot milk or water, rest for five minutes, and your nourishing Talbeena is ready to enjoy.",
  },
  {
    number: '04',
    title: 'Certified quality you can trust',
    text: 'ISO certified, GMP certified and FSSAI licensed, tested at NABL accredited labs — trusted by thousands of families across India.',
  },
]

export const reviews = [
  {
    quote:
      "The Elaichi flavour is my morning ritual now. It's warm, fragrant and keeps me full till lunch. My kids love it too!",
    name: 'Ayesha Khan',
    city: 'Mumbai',
  },
  {
    quote:
      "Finally a healthy breakfast that actually tastes indulgent. The Rabdi flavour reminds me of my grandmother's kitchen.",
    name: 'Rahul Mehta',
    city: 'Pune',
  },
  {
    quote:
      'No added sugar and ready in 5 minutes — perfect for my busy mornings. The Milk Mawa is rich and so satisfying.',
    name: 'Fatima Sheikh',
    city: 'Hyderabad',
  },
  {
    quote:
      'Ordered all three flavours over WhatsApp and delivery was smooth. Great quality dry fruits in every spoon.',
    name: 'Sana Qureshi',
    city: 'Delhi',
  },
  {
    quote:
      'Wholesome, filling and genuinely natural. It has become a staple for the entire family.',
    name: 'Imran Ali',
    city: 'Bengaluru',
  },
  {
    quote:
      "Love that there are no preservatives. It feels like a treat that's actually good for you.",
    name: 'Priya Nair',
    city: 'Kochi',
  },
]

export const faqs = [
  {
    q: 'What is Talbeena?',
    a: 'Talbeena is a wholesome, time-honoured porridge made from wheat and dry fruits. Al Kabeer Talbeena brings this traditional recipe to your kitchen in three delicious flavours — nourishing, comforting and ready in just 5 minutes.',
  },
  {
    q: 'How do I prepare Al Kabeer Talbeena?',
    a: 'Simply add hot milk or water to the Talbeena, stir well and let it rest for about five minutes. Your warm, wholesome bowl is ready to enjoy — no cooking required.',
  },
  {
    q: 'Does it contain added sugar or preservatives?',
    a: 'No. Al Kabeer Talbeena is made with no added sugar, no preservatives, no synthetic colours and no artificial flavours — just the honest goodness of wheat and real dry fruits.',
  },
  {
    q: 'Is it suitable for the whole family?',
    a: 'Yes. It is a light, easy-to-digest bowl that is gentle and nourishing for the entire family, making it a perfect everyday breakfast for all ages.',
  },
  {
    q: 'Which flavours are available?',
    a: 'We offer three flavours: Milk Mawa (rich and creamy), Rabdi (traditional and nostalgic), and Elaichi (fragrant green cardamom). Each box is priced at ₹299.',
  },
  {
    q: 'How do I place an order?',
    a: 'Ordering is easy — just message us on WhatsApp. Tap any "Order on WhatsApp" button and our team will help you pick the right flavour and place your order.',
  },
]
