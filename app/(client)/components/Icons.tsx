import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<SVGElement> {}

export const WhatsAppIcon = ({ className }: Props) => (
  <svg
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6809 7.91073C12.0175 8.0022 12.2464 8.29407 12.3881 8.61286L13.6804 11.5204C13.8486 11.8991 13.7767 12.3759 13.5576 12.7277C13.2015 13.2995 12.7973 14.0624 13.0822 14.6728C13.7964 16.2032 14.7854 17.1381 16.2776 17.8627C16.8872 18.1588 17.6449 17.7241 18.2168 17.3604C18.5461 17.151 19.0106 17.0711 19.3659 17.2327L22.3965 18.6111C22.7094 18.7534 22.9956 18.9799 23.0871 19.3113C23.5683 21.0521 21.4668 23.2902 19.8432 23.2902C18.2498 23.2902 16.672 22.9764 15.1999 22.3666C13.7279 21.7568 12.3903 20.8631 11.2636 19.7364C10.1369 18.6097 9.24319 17.2722 8.63343 15.8001C8.02367 14.328 7.70984 12.7502 7.70984 11.1569C7.70984 9.53569 9.9412 7.43807 11.6809 7.91073ZM12.2787 11.9944L11.0907 9.32127C10.842 9.34367 10.453 9.47849 10.0046 9.8648C9.40112 10.3848 9.18317 10.9426 9.18317 11.1569C9.18317 12.5567 9.4589 13.9429 9.99461 15.2363C10.5303 16.5296 11.3155 17.7047 12.3054 18.6946C13.2953 19.6845 14.4704 20.4697 15.7638 21.0054C17.0571 21.5411 18.4433 21.8169 19.8432 21.8169C20.0579 21.8169 20.6171 21.598 21.1373 20.993C21.5255 20.5414 21.6586 20.1511 21.6792 19.9034L18.9297 18.6529C18.6392 18.8356 18.2152 19.0873 17.7448 19.2507C17.2329 19.4286 16.4407 19.5798 15.634 19.188C13.866 18.3295 12.6172 17.1603 11.7471 15.2959C11.3815 14.5126 11.5118 13.743 11.6782 13.2306C11.8381 12.7384 12.0909 12.2987 12.2787 11.9944Z"
      fill="#A28869"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4335 30.7332C23.8098 30.7332 30.6001 23.9429 30.6001 15.5666C30.6001 7.19025 23.8098 0.399902 15.4335 0.399902C7.05713 0.399902 0.266785 7.19025 0.266785 15.5666C0.266785 18.094 0.885024 20.4771 1.97853 22.5728C2.08213 22.7714 2.11117 23.0012 2.0532 23.2175L0.330887 29.6453C0.158214 30.2897 0.747906 30.8794 1.39233 30.7068L7.84304 28.9783C8.05811 28.9207 8.28656 28.949 8.4844 29.0512C10.5662 30.1262 12.9289 30.7332 15.4335 30.7332ZM28.8668 15.5666C28.8668 22.9856 22.8525 28.9999 15.4335 28.9999C13.2121 28.9999 11.1214 28.4621 9.27968 27.5111C8.71713 27.2206 8.04631 27.1293 7.39442 27.304L2.39367 28.644L3.72747 23.6662C3.90319 23.0104 3.80985 22.3356 3.51524 21.771C2.54783 19.9169 2.00012 17.8083 2.00012 15.5666C2.00012 8.14754 8.01443 2.13324 15.4335 2.13324C22.8525 2.13324 28.8668 8.14754 28.8668 15.5666Z"
      fill="#A28869"
    />
  </svg>
);

export const PhoneIcon = ({ className }: Props) => (
  <svg
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0764 14.1477C9.65414 13.6496 9.272 13.1616 9.00005 12.7444C8.86388 12.5355 8.76676 12.3617 8.70633 12.2258C8.664 12.1307 8.65152 12.0802 8.64807 12.0662L8.64714 12.0626C8.64871 11.6417 8.71742 11.4694 8.8024 11.3228C8.85903 11.2251 8.93646 11.1185 9.06215 10.9573C9.08873 10.9232 9.11757 10.8866 9.14829 10.8476C9.25416 10.7131 9.38253 10.55 9.51807 10.3651C9.54017 10.3349 9.57347 10.2953 9.64214 10.2146L9.64337 10.2132C9.70411 10.1418 9.78533 10.0465 9.86729 9.93883C10.0338 9.72013 10.2285 9.41956 10.3437 9.03285C10.592 8.19906 10.3944 7.25569 9.60079 6.18963C8.73303 4.90657 7.42934 2.90885 6.74891 1.93004C6.22635 1.17833 5.50422 0.917738 4.87041 0.909387C3.27368 0.888348 0.90413 2.56965 0.336573 3.95299C0.1402 4.43162 0.0421887 5.03477 0.0421887 5.84288C0.0421884 7.53024 0.684111 9.88327 2.23513 12.6952C5.32692 18.3006 10.36 23.3337 15.9654 26.4255C18.7774 27.9765 21.1304 28.6184 22.8178 28.6184C23.6259 28.6184 24.229 28.5204 24.7076 28.3241C26.0889 27.7573 27.7723 25.3852 27.7512 23.7902C27.7429 23.1564 27.4823 22.4343 26.7306 21.9117C25.7518 21.2313 23.754 19.9276 22.471 19.0598C21.4049 18.2662 20.4616 18.0686 19.6278 18.317C19.2411 18.4322 18.9405 18.6268 18.7218 18.7933C18.6142 18.8753 18.5188 18.9565 18.4475 19.0173L18.446 19.0185C18.3654 19.0872 18.3257 19.1205 18.2955 19.1426C18.1107 19.2781 17.9476 19.4065 17.8131 19.5123C17.774 19.5431 17.7374 19.5719 17.7033 19.5985C17.5422 19.7242 17.4355 19.8016 17.3378 19.8582C17.1912 19.9432 17.019 20.0119 16.598 20.0135L16.5944 20.0126C16.5805 20.0091 16.53 19.9966 16.4348 19.9543C16.2989 19.8939 16.1251 19.7967 15.9162 19.6606C15.4991 19.3886 15.011 19.0065 14.5129 18.5843C12.9108 17.2262 11.4344 15.7498 10.0764 14.1477ZM1.94018 4.61092C1.86059 4.80492 1.77552 5.16066 1.77552 5.84288C1.77552 7.13616 2.2846 9.19608 3.7529 11.8581C6.68725 17.178 11.4826 21.9734 16.8025 24.9077C19.4645 26.376 21.5245 26.8851 22.8178 26.8851C23.5 26.8851 23.8557 26.8 24.0497 26.7204C24.8958 26.3733 25.7178 24.9304 25.9776 24.0819C26.0029 23.9992 26.0193 23.905 26.0181 23.8131C26.0169 23.7237 25.9995 23.6455 25.9656 23.5768C25.9334 23.5118 25.8724 23.4262 25.7412 23.3349C24.7585 22.6518 22.8224 21.3905 21.4829 20.4841C21.4713 20.4763 21.4599 20.4682 21.4488 20.4598C20.6651 19.8723 20.2782 19.9318 20.1226 19.9782C20.0123 20.011 19.9014 20.0738 19.7718 20.1724C19.7061 20.2225 19.6437 20.2753 19.5698 20.3382L19.5573 20.3488C19.4935 20.4032 19.4066 20.4773 19.3204 20.5404C19.1618 20.6567 19.0304 20.7601 18.8996 20.8631L18.8988 20.8637C18.8559 20.8974 18.813 20.9312 18.7693 20.9653C18.6015 21.0961 18.4152 21.2372 18.2071 21.3578C17.7438 21.6264 17.2555 21.7468 16.5832 21.7468C16.2664 21.7468 15.9656 21.6427 15.7304 21.5381C15.4804 21.4269 15.2221 21.2772 14.9696 21.1126C14.464 20.783 13.9127 20.3478 13.3921 19.9065C11.7177 18.4871 10.1736 16.9429 8.75417 15.2685C8.31287 14.7479 7.87761 14.1966 7.54803 13.691C7.38343 13.4386 7.23376 13.1802 7.12258 12.9302C7.01797 12.695 6.91378 12.3942 6.91378 12.0774C6.91378 11.4052 7.03423 10.9169 7.30282 10.4535C7.42346 10.2454 7.5645 10.0591 7.69537 9.8913C7.72947 9.84758 7.76319 9.80473 7.79695 9.76183L7.79749 9.76115C7.90046 9.63028 8.00389 9.49883 8.12019 9.34021C8.18338 9.25403 8.25735 9.16723 8.31174 9.10341L8.32246 9.09084C8.38536 9.01697 8.43813 8.95456 8.4882 8.8888C8.58686 8.75922 8.6496 8.64833 8.68244 8.53807C8.72879 8.38246 8.78834 7.99555 8.20086 7.21187C8.19247 7.20068 8.18436 7.1893 8.17652 7.17772C7.27013 5.83819 6.00879 3.90208 5.32568 2.91942C5.23446 2.78819 5.14886 2.7272 5.08379 2.69506C5.01509 2.66113 4.93688 2.64375 4.84757 2.64257C4.75567 2.64136 4.66144 2.65773 4.57869 2.68306C3.71865 2.94637 2.29271 3.75171 1.94018 4.61092Z"
      fill="#A28869"
    />
  </svg>
);

export const PhoneContactIcon = ({ className }: Props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M34.7453 24.7594L27.3844 21.4609L27.3641 21.4516C26.9819 21.2881 26.5651 21.2225 26.1512 21.2607C25.7373 21.2989 25.3395 21.4397 24.9938 21.6703C24.953 21.6972 24.9139 21.7264 24.8766 21.7578L21.0735 25C18.6641 23.8297 16.1766 21.3609 15.0063 18.9828L18.2531 15.1219C18.2844 15.0828 18.3141 15.0437 18.3422 15.0016C18.5679 14.6567 18.7048 14.2614 18.7408 13.8509C18.7768 13.4403 18.7107 13.0273 18.5485 12.6484V12.6297L15.2406 5.25625C15.0262 4.76135 14.6574 4.34908 14.1894 4.08099C13.7213 3.81291 13.1792 3.70337 12.6438 3.76875C10.5265 4.04735 8.58311 5.08713 7.17647 6.6939C5.76984 8.30066 4.99619 10.3645 5.00001 12.5C5.00001 24.9062 15.0938 35 27.5 35C29.6355 35.0038 31.6994 34.2302 33.3061 32.8235C34.9129 31.4169 35.9527 29.4735 36.2313 27.3562C36.2968 26.821 36.1875 26.279 35.9197 25.811C35.6519 25.343 35.2399 24.9741 34.7453 24.7594ZM27.5 32.5C22.1975 32.4942 17.1137 30.3852 13.3643 26.6357C9.6148 22.8863 7.5058 17.8025 7.50001 12.5C7.49414 10.9742 8.04384 9.49843 9.04648 8.34829C10.0491 7.19815 11.4361 6.45229 12.9485 6.25C12.9478 6.25623 12.9478 6.26251 12.9485 6.26875L16.2297 13.6125L13 17.4781C12.9672 17.5158 12.9374 17.556 12.911 17.5984C12.6758 17.9592 12.5379 18.3747 12.5105 18.8045C12.4831 19.2343 12.5672 19.6638 12.7547 20.0516C14.1703 22.9469 17.0875 25.8422 20.0141 27.2562C20.4046 27.4419 20.8367 27.5232 21.2681 27.4919C21.6994 27.4607 22.1153 27.3181 22.475 27.0781C22.5152 27.0512 22.5538 27.022 22.5906 26.9906L26.3891 23.75L33.7328 27.0391H33.75C33.5502 28.5535 32.8054 29.9433 31.6551 30.9484C30.5047 31.9536 29.0276 32.5051 27.5 32.5Z"
      fill="#A28869"
    />
  </svg>
);

export const TimeIcon = ({ className }: Props) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20 3.75C16.7861 3.75 13.6443 4.70305 10.972 6.48862C8.29969 8.27419 6.21689 10.8121 4.98696 13.7814C3.75704 16.7507 3.43524 20.018 4.06225 23.1702C4.68926 26.3224 6.23692 29.2179 8.50952 31.4905C10.7821 33.7631 13.6776 35.3108 16.8298 35.9378C19.982 36.5648 23.2493 36.243 26.2186 35.013C29.1879 33.7831 31.7258 31.7003 33.5114 29.028C35.297 26.3557 36.25 23.2139 36.25 20C36.2455 15.6916 34.5319 11.561 31.4855 8.51454C28.439 5.46806 24.3084 3.75455 20 3.75ZM20 33.75C17.2805 33.75 14.6221 32.9436 12.3609 31.4327C10.0997 29.9218 8.33737 27.7744 7.29666 25.2619C6.25596 22.7494 5.98366 19.9847 6.51421 17.3175C7.04476 14.6503 8.35432 12.2003 10.2773 10.2773C12.2003 8.35431 14.6503 7.04475 17.3175 6.5142C19.9848 5.98366 22.7494 6.25595 25.2619 7.29666C27.7744 8.33736 29.9218 10.0997 31.4327 12.3609C32.9436 14.6221 33.75 17.2805 33.75 20C33.7459 23.6455 32.2959 27.1404 29.7182 29.7182C27.1404 32.2959 23.6455 33.7459 20 33.75ZM30 20C30 20.3315 29.8683 20.6495 29.6339 20.8839C29.3995 21.1183 29.0815 21.25 28.75 21.25H20C19.6685 21.25 19.3505 21.1183 19.1161 20.8839C18.8817 20.6495 18.75 20.3315 18.75 20V11.25C18.75 10.9185 18.8817 10.6005 19.1161 10.3661C19.3505 10.1317 19.6685 10 20 10C20.3315 10 20.6495 10.1317 20.8839 10.3661C21.1183 10.6005 21.25 10.9185 21.25 11.25V18.75H28.75C29.0815 18.75 29.3995 18.8817 29.6339 19.1161C29.8683 19.3505 30 19.6685 30 20Z"
      fill="#A28869"
    />
  </svg>
);

export const YoutubeIcon = ({ className }: Props) => (
  <svg
    width="38"
    height="27"
    viewBox="0 0 38 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2104 9.05546C15.2104 8.5166 15.7937 8.17981 16.2604 8.44924L23.8582 12.8358C24.3248 13.1053 24.3248 13.7788 23.8582 14.0483L16.2604 18.4349C15.7937 18.7043 15.2104 18.3675 15.2104 17.8287V9.05546ZM21.9082 13.4421L16.7104 16.443V10.4411L21.9082 13.4421Z"
      fill="#A28869"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.5187 25.9401C35.1387 25.7124 37.2675 23.7256 37.563 21.1124C37.8492 18.5813 38 15.9526 38 13.2558C38 10.5591 37.8492 7.9303 37.563 5.39921C37.2675 2.78598 35.1387 0.799198 32.5187 0.571542C28.2414 0.199886 23.7024 0 19 0C14.2975 0 9.75854 0.199882 5.48133 0.571531C2.86131 0.799185 0.732485 2.78597 0.436996 5.3992C0.150795 7.93029 0 10.5591 0 13.2558C0 15.9526 0.150794 18.5813 0.436995 21.1124C0.732485 23.7257 2.86131 25.7124 5.48133 25.9401C9.75854 26.3117 14.2975 26.5116 19 26.5116C23.7024 26.5116 28.2414 26.3117 32.5187 25.9401ZM36 13.2558C36 15.8783 35.8533 18.432 35.5757 20.8877C35.392 22.5119 34.061 23.7985 32.3456 23.9476C28.1276 24.3141 23.6463 24.5116 19 24.5116C14.3536 24.5116 9.87239 24.3141 5.65445 23.9476C3.93897 23.7985 2.60799 22.5119 2.42433 20.8877C2.14666 18.432 2 15.8783 2 13.2558C2 10.6333 2.14666 8.07961 2.42433 5.62392C2.60799 3.99968 3.93897 2.71308 5.65445 2.56402C9.87239 2.19752 14.3536 2 19 2C23.6463 2 28.1276 2.19753 32.3456 2.56403C34.061 2.71309 35.392 3.99969 35.5757 5.62393C35.8533 8.07961 36 10.6333 36 13.2558Z"
      fill="#A28869"
    />
  </svg>
);

export const InstagramIcon = ({ className }: Props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23ZM16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
      fill="#A28869"
    />
    <path
      d="M25 9C25.5523 9 26 8.55229 26 8C26 7.44772 25.5523 7 25 7C24.4477 7 24 7.44772 24 8C24 8.55229 24.4477 9 25 9Z"
      fill="#A28869"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 0C4.02944 0 0 4.02944 0 9V23C0 27.9706 4.02944 32 9 32H23C27.9706 32 32 27.9706 32 23V9C32 4.02944 27.9706 0 23 0H9ZM23 2H9C5.13401 2 2 5.13401 2 9V23C2 26.866 5.13401 30 9 30H23C26.866 30 30 26.866 30 23V9C30 5.13401 26.866 2 23 2Z"
      fill="#A28869"
    />
  </svg>
);

export const TikTokIcon = ({ className }: Props) => (
  <svg
    width="30"
    height="36"
    viewBox="0 0 30 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9122 8.20766C22.4006 10.0768 24.7528 12.08 27.8986 12.6991V10.8143C23.86 9.85053 20.7346 6.48088 20.0515 2.4H18.0502C17.9951 7.14578 18.0205 11.8802 18.0459 16.6329C18.0602 19.3126 18.0746 21.9981 18.0746 24.6946C18.0746 28.5981 14.9102 31.7624 11.0068 31.7624C7.10336 31.7624 3.939 28.5981 3.939 24.6946C3.939 21.0361 6.71868 18.0269 10.2813 17.6636V15.8184C5.7023 16.1876 2.10142 20.0206 2.10142 24.6946C2.10142 29.6129 6.08849 33.6 11.0068 33.6C15.9251 33.6 19.9122 29.6129 19.9122 24.6946V8.20766ZM23.7122 13.2142C25.2512 14.0245 26.9585 14.5584 28.7679 14.7499C29.3298 14.8094 29.7986 14.353 29.7986 13.7879V10.1252C29.7986 9.59413 29.3813 9.16219 28.858 9.07237C25.1315 8.43292 22.2185 5.28202 21.8514 1.52682C21.7966 0.966524 21.3507 0.5 20.7877 0.5H17.1603C16.6144 0.5 16.1692 0.937815 16.1617 1.48368C16.0919 6.54428 16.119 11.6073 16.146 16.6698C16.1603 19.345 16.1746 22.0201 16.1746 24.6946C16.1746 27.5487 13.8609 29.8624 11.0068 29.8624C8.1527 29.8624 5.839 27.5487 5.839 24.6946C5.839 21.8405 8.1527 19.5268 11.0068 19.5268C11.6125 19.5268 12.1813 19.0819 12.1813 18.4762V14.8501C12.1813 14.1531 11.6035 13.8893 11.0068 13.8893C5.03914 13.8893 0.201416 18.727 0.201416 24.6946C0.201416 30.6623 5.03914 35.5 11.0068 35.5C16.9744 35.5 21.8122 30.6623 21.8122 24.6946V12.0111C22.4104 12.4604 23.0455 12.8633 23.7122 13.2142Z"
      fill="#A28869"
    />
  </svg>
);

export const XIcon = ({ className }: Props) => (
  <svg
    width="36"
    height="29"
    viewBox="0 0 36 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.2503 3.33673L29.381 26.118C28.8495 28.1808 26.4515 29.01 24.7517 27.9583C23.36 27.0972 20.4653 25.3968 14.7861 22.3439C13.6564 21.7366 13.2517 20.1542 14.2211 19.0834L17.0495 15.9592L12.4111 18.5008C10.9143 19.321 9.06348 19.7988 7.15279 19.3998C4.55945 18.8584 2.12463 17.8875 1.38966 17.5819C-0.460555 16.8127 -0.20852 14.3623 1.40401 13.7032L32.5433 0.974691C34.0733 0.349292 35.6628 1.73537 35.2503 3.33673ZM2.16075 15.5545C2.07896 15.5879 2.07587 15.7012 2.15746 15.7351C2.85619 16.0257 5.15373 16.9393 7.56155 17.4421C8.89298 17.72 10.2573 17.4004 11.4501 16.7468L24.9382 9.35587C25.2349 9.19332 25.5318 9.56954 25.3048 9.8203L15.7037 20.4257C15.6601 20.4739 15.6758 20.5515 15.733 20.5823C21.4315 23.6455 24.3646 25.367 25.804 26.2575C26.4132 26.6344 27.2655 26.3127 27.4442 25.6191L33.3135 2.83775C33.3156 2.82979 33.3077 2.82289 33.3 2.826L2.16075 15.5545Z"
      fill="#A28869"
    />
  </svg>
);

export const MenuIcon = ({ className }: Props) => (
  <svg
    width="41"
    height="31"
    viewBox="0 0 41 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.5 28H38M3 15.5H38M3 3H38"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon = ({ className, ...props }: Props) => (
  <svg
    width="51"
    height="51"
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M48.0979 48.069L25.5979 25.569M25.5979 25.569L3.09795 3.06904M25.5979 25.569L48.0982 3.06904M25.5979 25.569L3.09795 48.0693"
      stroke="black"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LocationIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 22.5C18.7639 22.5 17.5555 22.1334 16.5277 21.4467C15.4999 20.7599 14.6988 19.7838 14.2258 18.6418C13.7527 17.4997 13.6289 16.2431 13.8701 15.0307C14.1113 13.8183 14.7065 12.7047 15.5806 11.8306C16.4547 10.9565 17.5683 10.3613 18.7807 10.1201C19.9931 9.87894 21.2497 10.0027 22.3918 10.4758C23.5338 10.9488 24.5099 11.7499 25.1967 12.7777C25.8834 13.8055 26.25 15.0139 26.25 16.25C26.248 17.907 25.5889 19.4956 24.4172 20.6672C23.2456 21.8389 21.657 22.498 20 22.5ZM20 12.5C19.2583 12.5 18.5333 12.7199 17.9166 13.132C17.2999 13.544 16.8193 14.1297 16.5355 14.8149C16.2516 15.5002 16.1774 16.2542 16.3221 16.9816C16.4668 17.709 16.8239 18.3772 17.3484 18.9017C17.8728 19.4261 18.541 19.7833 19.2684 19.9279C19.9958 20.0726 20.7498 19.9984 21.4351 19.7146C22.1203 19.4307 22.706 18.9501 23.118 18.3334C23.5301 17.7167 23.75 16.9917 23.75 16.25C23.749 15.2557 23.3536 14.3025 22.6506 13.5994C21.9475 12.8964 20.9943 12.501 20 12.5Z"
      fill="#A28869"
    />
    <path
      d="M20 37.5L9.45501 25.0638C9.30848 24.877 9.16348 24.6891 9.02001 24.5C7.21964 22.1267 6.24666 19.2289 6.25001 16.25C6.25001 12.6033 7.69867 9.10591 10.2773 6.52728C12.8559 3.94866 16.3533 2.5 20 2.5C23.6467 2.5 27.1441 3.94866 29.7227 6.52728C32.3014 9.10591 33.75 12.6033 33.75 16.25C33.7529 19.2274 32.7804 22.1239 30.9813 24.4963L30.98 24.5C30.98 24.5 30.605 24.9925 30.5488 25.0588L20 37.5ZM11.0163 22.9938C11.0163 22.9938 11.3075 23.3787 11.3738 23.4612L20 33.635L28.6375 23.4475C28.6925 23.3787 28.985 22.9913 28.9863 22.99C30.4578 21.0514 31.253 18.6838 31.25 16.25C31.25 13.2663 30.0647 10.4048 27.955 8.29505C25.8452 6.18526 22.9837 5 20 5C17.0163 5 14.1548 6.18526 12.0451 8.29505C9.93527 10.4048 8.75001 13.2663 8.75001 16.25C8.74692 18.6854 9.54307 21.0545 11.0163 22.9938Z"
      fill="#A28869"
    />
  </svg>
);

export const ErrorIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16.462C12.1747 16.462 12.321 16.403 12.439 16.285C12.5563 16.167 12.615 16.0207 12.615 15.846C12.615 15.672 12.556 15.526 12.438 15.408C12.32 15.29 12.174 15.2307 12 15.23C11.826 15.2293 11.68 15.2883 11.562 15.407C11.444 15.5257 11.385 15.6717 11.385 15.845C11.385 16.0183 11.444 16.1647 11.562 16.284C11.68 16.4033 11.826 16.4633 12 16.462ZM11.5 12.653C11.5 12.9291 11.7239 13.153 12 13.153V13.153C12.2761 13.153 12.5 12.9291 12.5 12.653V7.653C12.5 7.37686 12.2761 7.153 12 7.153V7.153C11.7239 7.153 11.5 7.37686 11.5 7.653V12.653ZM12.003 21C10.759 21 9.589 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.558 4.18167 16.606 3.709 15.512C3.23633 14.418 3 13.2483 3 12.003C3 10.7577 3.23633 9.58767 3.709 8.493C4.181 7.39767 4.82133 6.44467 5.63 5.634C6.43867 4.82333 7.391 4.18167 8.487 3.709C9.583 3.23633 10.753 3 11.997 3C13.241 3 14.411 3.23633 15.507 3.709C16.6023 4.181 17.5553 4.82167 18.366 5.631C19.1767 6.44033 19.8183 7.39267 20.291 8.488C20.7637 9.58333 21 10.753 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.82 16.603 19.1787 17.556 18.368 18.366C17.5573 19.176 16.6053 19.8177 15.512 20.291C14.4187 20.7643 13.249 21.0007 12.003 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
      fill="#E02727"
    />
  </svg>
);
