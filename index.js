function openWhatsAppChat() {
    const phoneNumber = "9360857383"; // Replace with your WhatsApp number
    const message = "Hello! How can I help you?"; // Optional predefined message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
