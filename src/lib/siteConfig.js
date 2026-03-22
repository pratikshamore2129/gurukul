export const siteConfig = {
  whatsappNumber: '919876543210',
  whatsappMessage: 'Hello Gurukul Eduworld, I would like to know more about your courses.',
};

export function getWhatsAppUrl() {
  const { whatsappNumber, whatsappMessage } = siteConfig;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}
