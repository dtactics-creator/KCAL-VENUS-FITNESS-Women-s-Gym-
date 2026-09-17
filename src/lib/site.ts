export const PHONE_DISPLAY = "+91 91500 02782";
export const PHONE_TEL = "tel:+919150002782";
export const WHATSAPP_NUMBER = "919150002782";
export const INSTAGRAM_URL = "https://www.instagram.com/";

export const WHATSAPP_MESSAGE =
  "Hi KCAL VENUS FITNESS, I'm interested in joining the gym and would like to know more about membership and timings.";

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const ADDRESS_LINES = [
  "KCAL VENUS FITNESS (Women's Gym),",
  "893 T.H High Road, Theradi Metro,",
  "Near Tiruvottiyur, Chennai, Tamil Nadu 600019",
];

export const ADDRESS_SHORT = "Theradi Metro, Tiruvottiyur, Chennai";

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir//KCAL+VENUS+FITNESS+(+Women's+Gym+),+893+T.H+High+Road,+Theradi+Metro,+near+Tiruvottiyur,+Tiruvottiyur,+Chennai,+Tamil+Nadu+600019/@13.1594005,80.3024673,735m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3a526fc4ebf111a3:0xc29dfc2776a3a7c0!2sKCAL+VENUS+FITNESS+(+Women's+Gym+)!8m2!3d13.1594005!4d80.3024673!16s%2Fg%2F11zck4g8pd!4m7!1m0!1m5!1m1!s0x3a526fc4ebf111a3:0xc29dfc2776a3a7c0!2m2!1d80.3024673!2d13.1594005?entry=ttu&g_ep=EgoyMDI2MDkxNC4wIKXMDSoASAFQAw%3D%3D";

export const REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=KCAL+VENUS+FITNESS+Women's+Gym+893+T.H+High+Road+Theradi+Metro+Tiruvottiyur+Chennai+600019";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=KCAL%20VENUS%20FITNESS%20(Women's%20Gym)%20893%20T.H%20High%20Road%20Theradi%20Metro%20Tiruvottiyur%20Chennai%20600019&output=embed";

export const OPENING_HOURS = [
  { day: "Thursday", hours: "5:30 am–9:30 pm" },
  { day: "Friday", hours: "5:30 am–9:30 pm" },
  { day: "Saturday", hours: "5:30 am–9:30 pm" },
  { day: "Sunday", hours: "7 am–11 am" },
  { day: "Monday", hours: "5:30 am–9:30 pm" },
  { day: "Tuesday", hours: "5:30 am–9:30 pm" },
  { day: "Wednesday", hours: "5:30 am–9:30 pm" },
];

export const OFFER_PRICE = "\u20B96,999";
export const OFFER_PER = "/ YEAR";
export const OFFER_SLOTS = "WOMEN'S GYM";

export const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/programs", label: "PROGRAMS" },
  { to: "/transformation", label: "TRANSFORMATION" },
  { to: "/contact", label: "CONTACT" },
];
