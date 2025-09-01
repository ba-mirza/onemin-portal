import InstagramIcon from "./ui/icons/instagram";
import TikTokIcon from "./ui/icons/tiktok";
import WhatsAppIcon from "./ui/icons/whatsapp";
import ThreadsIcon from "./ui/icons/threads";
import TelegramIcon from "./ui/icons/telegram";

export default function Header() {
  return (
    <div className="flex justify-center md:justify-end gap-4 px-8 items-center md:w-full h-[50px] bg-[#F7F7F7] border-[1px] border-b-[#202020]">
      <WhatsAppIcon />
      <TikTokIcon />
      <InstagramIcon />
      <ThreadsIcon />
      <TelegramIcon />
    </div>
  );
}
