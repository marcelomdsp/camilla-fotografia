import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";

type IconProps = {
  size?: number;
};

export const Instagram = ({ size }: IconProps) => {
  return (
    <a
      className="hover:text-(--vinho)"
      href="https://www.instagram.com/camillafotografiabr/"
      target="blank"
    >
      <FaSquareInstagram size={size} />
    </a>
  );
};

export const Facebook = ({ size }: IconProps) => {
  return (
    <a
      className="hover:text-(--vinho)"
      href="https://www.facebook.com/profile.php?id=61567864648083"
      target="blank"
    >
      <FaSquareFacebook size={size} />
    </a>
  );
};

export const WhatsApp = ({ size }: IconProps) => {
  return (
    <a
      className="hover:text-(--vinho)"
      href="https://wa.me/5521971639183"
      target="blank"
    >
      <FaSquareWhatsapp size={size} />
    </a>
  );
};
