export const PHONE_DISPLAY = "+91 91500 02782";
export const PHONE_TEL = "tel:+919150002782";
export const WHATSAPP_NUMBER = "919150002782";
export const INSTAGRAM_URL = "https://www.instagram.com/kcalvenus/";

export const WHATSAPP_MESSAGE =
  "Hi KCAL VENUS FITNESS, I'm interested in joining the gym and would like to know more about membership and timings.";

export const whatsappLink = (message: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const ADDRESS_LINES = [
  "KCAL VENUS FITNESS (Women's Gym),",
  "1038, 1039, Thiruvottiyur High Rd,",
  "Thangal, Rajakadai, Tiruvottiyur, Chennai, Tamil Nadu 600019",
];

export const ADDRESS_SHORT = "Thangal, Rajakadai, Tiruvottiyur, Chennai";

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir//1038,+KCAL+VENUS+FITNESS+(+Women's+Gym+)+-+Kaladipet,+1039,+Thiruvottiyur+High+Rd,+Thangal,+Rajakadai,+Tiruvottiyur,+Chennai,+Tamil+Nadu+600019/@13.1499471,80.2993444,17z/data=!4m16!1m7!3m6!1s0x3a526fc9ba959095:0x55400c9498986899!2sKCAL+VENUS+FITNESS+(+Women's+Gym+)+-+Kaladipet!8m2!3d13.1499471!4d80.2993444!16s%2Fg%2F11zypt_tm2!4m7!1m0!1m5!1m1!1s0x3a526fc9ba959095:0x55400c9498986899!2m2!1d80.2993444!2d13.1499471?entry=ttu&g_ep=EgoyMDI2MDkxNS4wIKXMDSoASAFQAw%3D%3D";

export const REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=KCAL+VENUS+FITNESS+Women's+Gym+-+Kaladipet+1038+1039+Thiruvottiyur+High+Road+Thangal+Rajakadai+Tiruvottiyur+Chennai+600019";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=KCAL%20VENUS%20FITNESS%20(Women's%20Gym)%20-%20Kaladipet%201038%201039%20Thiruvottiyur%20High%20Road%20Thangal%20Rajakadai%20Tiruvottiyur%20Chennai%20600019&ll=13.1499471,80.2993444&z=17&output=embed";

export const OPENING_HOURS = [
  { day: "Thursday", hours: "5:30 am–9:30 pm" },
  { day: "Friday", hours: "5:30 am–9:30 pm" },
  { day: "Saturday", hours: "5:30 am–9:30 pm" },
  { day: "Sunday", hours: "7 am–11 am" },
  { day: "Monday", hours: "5:30 am–9:30 pm" },
  { day: "Tuesday", hours: "5:30 am–9:30 pm" },
  { day: "Wednesday", hours: "5:30 am–9:30 pm" },
];

export const OFFER_PRICE = "6 MONTHS + 2 FREE";
export const OFFER_PER = "";
export const OFFER_SLOTS = "WOMEN'S GYM";

export const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/programs", label: "PROGRAMS" },
  { to: "/transformation", label: "TRANSFORMATION" },
  { to: "/contact", label: "CONTACT" },
];
