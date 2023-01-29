import Link from "next/link";
import { useRouter } from "next/router";

// const navigations = [
//   { id: 1, name: "Deals", img: "deals-icon.svg", link: "/" },
//   { id: 2, name: "Menu", img: "menu-icon.svg" },
//   { id: 3, name: "Home", img: "homebw-icon.svg", link: "/" },
//   { id: 4, name: "Cart", img: "cart-bw-icon.svg", link: "cart" },
//   { id: 5, name: "Profile", img: "profile-icon.svg", link: "users" },
// ];

const MobileNav = () => {
  let { route } = useRouter();

  return (
    <section
      id="bottom-navigation"
      className="block fixed inset-x-0 bottom-0 z-10 bg-white drop-shadow-2xl lg:hidden"
    >
      <div className="p-4 flex flex-row items-center justify-between">
        <Link href="">
          <div className="w-16 h-16 rounded-full flex flex-col justify-center items-center ">
            <img src="/sales-icon.svg" alt=""/>
            <span className="text-xs font-medium mt-2">Menu</span>
          </div>
        </Link>

        <Link href="">
          {route === "" ? (
            <div className="w-20 h-20 rounded-full flex flex-col justify-center items-center bg-black text-white group">
              <svg width="24" height="17">
                <path
                  d="M0 0V3.32308H24V0H0ZM0 6.64616V9.96923H24V6.64616H0ZM0 13.2923V16.6154H24V13.2923H0Z"
                  fill="#fff"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Menu</span>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full flex flex-col justify-center items-center ">
              <svg width="24" height="17">
                <path
                  d="M0 0V3.32308H24V0H0ZM0 6.64616V9.96923H24V6.64616H0ZM0 13.2923V16.6154H24V13.2923H0Z"
                  fill="#656070"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Menu</span>
            </div>
          )}
        </Link>

        <Link href="/">
          {route == "/" ? (
            <div className="w-16 h-16 rounded-full flex flex-col justify-center items-center bg-black text-white group">
              <svg width="24" height="24">
                <path
                  d="M13.0607 0.43934C12.4749 -0.146447 11.5251 -0.146447 10.9393 0.43934L0.43934 10.9393C-0.146447 11.5251 -0.146447 12.4749 0.43934 13.0607C1.02513 13.6464 1.97487 13.6464 2.56066 13.0607L3 12.6213V22.5C3 23.3284 3.67157 24 4.5 24H7.5C8.32843 24 9 23.3284 9 22.5V19.5C9 18.6716 9.67157 18 10.5 18H13.5C14.3284 18 15 18.6716 15 19.5V22.5C15 23.3284 15.6716 24 16.5 24H19.5C20.3284 24 21 23.3284 21 22.5V12.6213L21.4393 13.0607C22.0251 13.6464 22.9749 13.6464 23.5607 13.0607C24.1464 12.4749 24.1464 11.5251 23.5607 10.9393L13.0607 0.43934Z"
                  fill="#fff"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Home</span>
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <svg width="24" height="24">
                <path
                  d="M13.0607 0.43934C12.4749 -0.146447 11.5251 -0.146447 10.9393 0.43934L0.43934 10.9393C-0.146447 11.5251 -0.146447 12.4749 0.43934 13.0607C1.02513 13.6464 1.97487 13.6464 2.56066 13.0607L3 12.6213V22.5C3 23.3284 3.67157 24 4.5 24H7.5C8.32843 24 9 23.3284 9 22.5V19.5C9 18.6716 9.67157 18 10.5 18H13.5C14.3284 18 15 18.6716 15 19.5V22.5C15 23.3284 15.6716 24 16.5 24H19.5C20.3284 24 21 23.3284 21 22.5V12.6213L21.4393 13.0607C22.0251 13.6464 22.9749 13.6464 23.5607 13.0607C24.1464 12.4749 24.1464 11.5251 23.5607 10.9393L13.0607 0.43934Z"
                  fill="#656070"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Home</span>
            </div>
          )}
        </Link>

        <Link href="/cart">
          {route === "/cart" ? (
            <div className="w-16 h-16 rounded-full flex flex-col justify-center items-center bg-black text-white group">
              <svg width="22" height="22">
                <path
                  className="group-focus:fill-white"
                  d="M6.48744 21.8748C5.89276 21.8748 5.38385 21.6632 4.96073 21.2401C4.53688 20.8163 4.32496 20.307 4.32496 19.7123C4.32496 19.1176 4.53688 18.6084 4.96073 18.1845C5.38385 17.7614 5.89276 17.5498 6.48744 17.5498C7.08212 17.5498 7.59102 17.7614 8.01415 18.1845C8.43799 18.6084 8.64992 19.1176 8.64992 19.7123C8.64992 20.307 8.43799 20.8163 8.01415 21.2401C7.59102 21.6632 7.08212 21.8748 6.48744 21.8748ZM17.2998 21.8748C16.7051 21.8748 16.1962 21.6632 15.7731 21.2401C15.3493 20.8163 15.1374 20.307 15.1374 19.7123C15.1374 19.1176 15.3493 18.6084 15.7731 18.1845C16.1962 17.7614 16.7051 17.5498 17.2998 17.5498C17.8945 17.5498 18.4038 17.7614 18.8276 18.1845C19.2507 18.6084 19.4623 19.1176 19.4623 19.7123C19.4623 20.307 19.2507 20.8163 18.8276 21.2401C18.4038 21.6632 17.8945 21.8748 17.2998 21.8748ZM5.56838 4.57496L8.16336 9.98116H15.732L18.7054 4.57496H5.56838ZM4.54121 2.41248H20.4895C20.904 2.41248 21.2193 2.59701 21.4356 2.96607C21.6518 3.33586 21.6608 3.70997 21.4626 4.0884L17.6242 11.0083C17.426 11.3687 17.16 11.6481 16.8262 11.8463C16.4932 12.0445 16.1285 12.1436 15.732 12.1436H7.6768L6.48744 14.3061H19.4623V16.4686H6.48744C5.67651 16.4686 5.06381 16.1125 4.64933 15.4003C4.23485 14.6889 4.21683 13.9817 4.59527 13.2789L6.05494 10.6299L2.16248 2.41248H0V0.25H3.51403L4.54121 2.41248ZM8.16336 9.98116H15.732H8.16336Z"
                  fill="#fff"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Cart</span>
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full flex flex-col justify-center items-center">
              <svg width="22" height="22">
                <path
                  className="group-focus:fill-white"
                  d="M6.48744 21.8748C5.89276 21.8748 5.38385 21.6632 4.96073 21.2401C4.53688 20.8163 4.32496 20.307 4.32496 19.7123C4.32496 19.1176 4.53688 18.6084 4.96073 18.1845C5.38385 17.7614 5.89276 17.5498 6.48744 17.5498C7.08212 17.5498 7.59102 17.7614 8.01415 18.1845C8.43799 18.6084 8.64992 19.1176 8.64992 19.7123C8.64992 20.307 8.43799 20.8163 8.01415 21.2401C7.59102 21.6632 7.08212 21.8748 6.48744 21.8748ZM17.2998 21.8748C16.7051 21.8748 16.1962 21.6632 15.7731 21.2401C15.3493 20.8163 15.1374 20.307 15.1374 19.7123C15.1374 19.1176 15.3493 18.6084 15.7731 18.1845C16.1962 17.7614 16.7051 17.5498 17.2998 17.5498C17.8945 17.5498 18.4038 17.7614 18.8276 18.1845C19.2507 18.6084 19.4623 19.1176 19.4623 19.7123C19.4623 20.307 19.2507 20.8163 18.8276 21.2401C18.4038 21.6632 17.8945 21.8748 17.2998 21.8748ZM5.56838 4.57496L8.16336 9.98116H15.732L18.7054 4.57496H5.56838ZM4.54121 2.41248H20.4895C20.904 2.41248 21.2193 2.59701 21.4356 2.96607C21.6518 3.33586 21.6608 3.70997 21.4626 4.0884L17.6242 11.0083C17.426 11.3687 17.16 11.6481 16.8262 11.8463C16.4932 12.0445 16.1285 12.1436 15.732 12.1436H7.6768L6.48744 14.3061H19.4623V16.4686H6.48744C5.67651 16.4686 5.06381 16.1125 4.64933 15.4003C4.23485 14.6889 4.21683 13.9817 4.59527 13.2789L6.05494 10.6299L2.16248 2.41248H0V0.25H3.51403L4.54121 2.41248ZM8.16336 9.98116H15.732H8.16336Z"
                  fill="#656070"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Cart</span>
            </div>
          )}
        </Link>

        <Link href="/users">
          {route === "/users" ? (
            <div className="w-20 h-20 rounded-full flex flex-col justify-center items-center bg-black text-white group">
              <svg width="24" height="24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3431 10.5 9 9.15685 9 7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM11.9999 13.5C8.97359 13.5 6.36592 15.2924 5.1806 17.8736C6.83104 19.7881 9.27398 21 12 21C14.7259 21 17.1688 19.7881 18.8192 17.8737C17.634 15.2925 15.0263 13.5 11.9999 13.5Z"
                  fill="#fff"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Profile</span>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-full flex flex-col justify-center items-center focus:bg-black focus:text-white group">
              <svg width="24" height="24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3431 10.5 9 9.15685 9 7.5C9 5.84315 10.3431 4.5 12 4.5C13.6569 4.5 15 5.84315 15 7.5ZM11.9999 13.5C8.97359 13.5 6.36592 15.2924 5.1806 17.8736C6.83104 19.7881 9.27398 21 12 21C14.7259 21 17.1688 19.7881 18.8192 17.8737C17.634 15.2925 15.0263 13.5 11.9999 13.5Z"
                  fill="#656070"
                />
              </svg>
              <span className="text-xs font-medium mt-2">Profile</span>
            </div>
          )}
        </Link>
      </div>
    </section>
  );
};

export default MobileNav;
