import React from "react";
import styles from "./Logo.module.scss"; // Importando o arquivo de estilos

const Logo = () => {
  return (
    <div className={styles.logo}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="123"
        height="20"
        viewBox="0 0 123 20"
        fill="none"
      >
        <path
          d="M14.092 0.858C14.7507 0.858 15.288 1.07467 15.704 1.508C16.1373 1.94133 16.354 2.50467 16.354 3.198V17.108C16.354 17.8187 16.146 18.3907 15.73 18.824C15.314 19.2573 14.7767 19.474 14.118 19.474C13.338 19.474 12.7487 19.214 12.35 18.694L4.446 8.84V17.108C4.446 17.8187 4.24667 18.3907 3.848 18.824C3.44933 19.2573 2.912 19.474 2.236 19.474C1.57733 19.474 1.04 19.2573 0.624 18.824C0.208 18.3907 0 17.8187 0 17.108V3.198C0 2.50467 0.208 1.94133 0.624 1.508C1.04 1.07467 1.57733 0.858 2.236 0.858C2.98133 0.858 3.562 1.118 3.978 1.638L11.882 11.466V3.198C11.882 2.48733 12.0813 1.924 12.48 1.508C12.896 1.07467 13.4333 0.858 14.092 0.858Z"
          fill="url(#paint0_linear_38098_88)"
        />
        <path
          d="M29.9477 6.266C30.6584 6.266 31.2217 6.45667 31.6377 6.838C32.0537 7.21933 32.2617 7.73933 32.2617 8.398V17.394C32.2617 18.0007 32.0451 18.5033 31.6117 18.902C31.1784 19.2833 30.6151 19.474 29.9217 19.474C29.2977 19.474 28.7864 19.3093 28.3877 18.98C27.9891 18.6333 27.7811 18.174 27.7637 17.602C27.3651 18.226 26.8537 18.7027 26.2297 19.032C25.6231 19.3613 24.9211 19.526 24.1237 19.526C22.4771 19.526 21.2551 19.0753 20.4577 18.174C19.6604 17.2553 19.2617 15.8687 19.2617 14.014V8.398C19.2617 7.73933 19.4697 7.21933 19.8857 6.838C20.3017 6.45667 20.8651 6.266 21.5757 6.266C22.2864 6.266 22.8497 6.45667 23.2657 6.838C23.6817 7.21933 23.8897 7.73933 23.8897 8.398V14.118C23.8897 15.366 24.4271 15.99 25.5017 15.99C26.1257 15.99 26.6371 15.7647 27.0357 15.314C27.4344 14.8633 27.6337 14.274 27.6337 13.546V8.398C27.6337 7.73933 27.8417 7.21933 28.2577 6.838C28.6737 6.45667 29.2371 6.266 29.9477 6.266Z"
          fill="url(#paint1_linear_38098_88)"
        />
        <path
          d="M58.177 15.73C58.6277 16.1633 58.853 16.666 58.853 17.238C58.853 17.81 58.6364 18.3127 58.203 18.746C57.7697 19.1793 57.2584 19.396 56.669 19.396C56.0277 19.396 55.4384 19.1187 54.901 18.564L47.491 10.972V17.108C47.491 17.836 47.2744 18.4167 46.841 18.85C46.4077 19.266 45.8184 19.474 45.073 19.474C44.345 19.474 43.7644 19.266 43.331 18.85C42.915 18.4167 42.707 17.836 42.707 17.108V3.198C42.707 2.48733 42.915 1.924 43.331 1.508C43.7644 1.07467 44.345 0.858 45.073 0.858C45.8184 0.858 46.4077 1.07467 46.841 1.508C47.2744 1.924 47.491 2.48733 47.491 3.198V8.918L54.797 1.56C55.2477 1.092 55.759 0.858 56.331 0.858C56.903 0.858 57.4057 1.07467 57.839 1.508C58.2724 1.924 58.489 2.418 58.489 2.99C58.489 3.562 58.2377 4.09067 57.735 4.576L52.405 9.802L58.177 15.73Z"
          fill="url(#paint2_linear_38098_88)"
        />
        <path
          d="M70.8224 15.21C71.221 15.21 71.5417 15.366 71.7844 15.678C72.0444 15.99 72.1744 16.3973 72.1744 16.9C72.1744 17.5933 71.8364 18.122 71.1604 18.486C70.571 18.7807 69.869 19.032 69.0544 19.24C68.257 19.4307 67.5204 19.526 66.8444 19.526C65.423 19.526 64.1837 19.2573 63.1264 18.72C62.069 18.1827 61.2544 17.4113 60.6824 16.406C60.1104 15.4007 59.8244 14.222 59.8244 12.87C59.8244 11.5873 60.093 10.4433 60.6304 9.438C61.185 8.41533 61.9477 7.62667 62.9184 7.072C63.9064 6.5 65.0157 6.214 66.2464 6.214C67.4424 6.214 68.491 6.474 69.3924 6.994C70.2937 7.514 70.987 8.25067 71.4724 9.204C71.975 10.1573 72.2264 11.2753 72.2264 12.558C72.2264 12.9567 72.131 13.2687 71.9404 13.494C71.767 13.702 71.507 13.806 71.1604 13.806H64.2964C64.4177 14.638 64.6864 15.236 65.1024 15.6C65.5184 15.964 66.1337 16.146 66.9484 16.146C67.3817 16.146 67.7804 16.1027 68.1444 16.016C68.5084 15.912 68.9157 15.7733 69.3664 15.6C69.6264 15.496 69.8777 15.4093 70.1204 15.34C70.3804 15.2533 70.6144 15.21 70.8224 15.21ZM66.3764 9.334C65.7697 9.334 65.2844 9.53333 64.9204 9.932C64.5564 10.3133 64.3397 10.8767 64.2704 11.622H68.3524C68.2484 10.0967 67.5897 9.334 66.3764 9.334Z"
          fill="url(#paint3_linear_38098_88)"
        />
        <path
          d="M82.9424 6.214C84.4678 6.214 85.6031 6.67333 86.3484 7.592C87.0938 8.49333 87.4664 9.87133 87.4664 11.726V17.342C87.4664 18.0007 87.2584 18.5207 86.8424 18.902C86.4264 19.2833 85.8631 19.474 85.1524 19.474C84.4418 19.474 83.8784 19.2833 83.4624 18.902C83.0464 18.5207 82.8384 18.0007 82.8384 17.342V11.934C82.8384 11.1713 82.6998 10.6167 82.4224 10.27C82.1624 9.92333 81.7638 9.75 81.2264 9.75C80.5331 9.75 79.9784 9.97533 79.5624 10.426C79.1638 10.8593 78.9644 11.4487 78.9644 12.194V17.342C78.9644 18.0007 78.7564 18.5207 78.3404 18.902C77.9244 19.2833 77.3611 19.474 76.6504 19.474C75.9398 19.474 75.3764 19.2833 74.9604 18.902C74.5444 18.5207 74.3364 18.0007 74.3364 17.342V8.346C74.3364 7.73933 74.5531 7.24533 74.9864 6.864C75.4198 6.46533 75.9831 6.266 76.6764 6.266C77.3351 6.266 77.8551 6.448 78.2364 6.812C78.6351 7.176 78.8344 7.65267 78.8344 8.242C79.2851 7.58333 79.8658 7.08067 80.5764 6.734C81.2871 6.38733 82.0758 6.214 82.9424 6.214Z"
          fill="url(#paint4_linear_38098_88)"
        />
        <path
          d="M99.7766 15.912C101.163 15.912 101.857 16.4753 101.857 17.602C101.857 18.746 101.163 19.318 99.7766 19.318H91.5866C90.98 19.318 90.486 19.1273 90.1046 18.746C89.7233 18.3647 89.5326 17.9053 89.5326 17.368C89.5326 16.796 89.7493 16.2673 90.1826 15.782L95.6426 9.932H91.4566C90.07 9.932 89.3766 9.36 89.3766 8.216C89.3766 7.08933 90.07 6.526 91.4566 6.526H99.3346C99.9413 6.526 100.435 6.71667 100.817 7.098C101.198 7.47933 101.389 7.93867 101.389 8.476C101.389 9.03067 101.172 9.55067 100.739 10.036L95.2526 15.912H99.7766Z"
          fill="url(#paint5_linear_38098_88)"
        />
        <path
          d="M105.875 19.474C105.216 19.474 104.662 19.3007 104.211 18.954C103.778 18.59 103.561 18.0527 103.561 17.342V8.398C103.561 7.68733 103.778 7.15867 104.211 6.812C104.662 6.448 105.216 6.266 105.875 6.266C106.534 6.266 107.08 6.448 107.513 6.812C107.964 7.15867 108.189 7.68733 108.189 8.398V17.342C108.189 18.0527 107.964 18.59 107.513 18.954C107.08 19.3007 106.534 19.474 105.875 19.474ZM105.875 4.446C105.095 4.446 104.471 4.24667 104.003 3.848C103.552 3.432 103.327 2.886 103.327 2.21C103.327 1.534 103.552 0.996667 104.003 0.598C104.471 0.199333 105.095 0 105.875 0C106.638 0 107.253 0.199333 107.721 0.598C108.189 0.996667 108.423 1.534 108.423 2.21C108.423 2.886 108.189 3.432 107.721 3.848C107.27 4.24667 106.655 4.446 105.875 4.446Z"
          fill="url(#paint6_linear_38098_88)"
        />
        <path
          d="M121.274 15.21C121.672 15.21 121.993 15.366 122.236 15.678C122.496 15.99 122.626 16.3973 122.626 16.9C122.626 17.5933 122.288 18.122 121.612 18.486C121.022 18.7807 120.32 19.032 119.506 19.24C118.708 19.4307 117.972 19.526 117.296 19.526C115.874 19.526 114.635 19.2573 113.578 18.72C112.52 18.1827 111.706 17.4113 111.134 16.406C110.562 15.4007 110.276 14.222 110.276 12.87C110.276 11.5873 110.544 10.4433 111.082 9.438C111.636 8.41533 112.399 7.62667 113.37 7.072C114.358 6.5 115.467 6.214 116.698 6.214C117.894 6.214 118.942 6.474 119.844 6.994C120.745 7.514 121.438 8.25067 121.924 9.204C122.426 10.1573 122.678 11.2753 122.678 12.558C122.678 12.9567 122.582 13.2687 122.392 13.494C122.218 13.702 121.958 13.806 121.612 13.806H114.748C114.869 14.638 115.138 15.236 115.554 15.6C115.97 15.964 116.585 16.146 117.4 16.146C117.833 16.146 118.232 16.1027 118.596 16.016C118.96 15.912 119.367 15.7733 119.818 15.6C120.078 15.496 120.329 15.4093 120.572 15.34C120.832 15.2533 121.066 15.21 121.274 15.21ZM116.828 9.334C116.221 9.334 115.736 9.53333 115.372 9.932C115.008 10.3133 114.791 10.8767 114.722 11.622H118.804C118.7 10.0967 118.041 9.334 116.828 9.334Z"
          fill="url(#paint7_linear_38098_88)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_38098_88"
            x1="35.3857"
            y1="19.318"
            x2="35.8857"
            y2="19.318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FD377E" />
            <stop offset="1" stopColor="#212529" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
