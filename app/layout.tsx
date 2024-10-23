/*
 * @Author: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @Date: 2024-09-14 22:32:18
 * @LastEditors: 孟学桐 mengxuetong@bjy.powerchina.cn
 * @LastEditTime: 2024-10-15 21:43:11
 * @FilePath: /test-app/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from 'next/script'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  keywords: "All Creator Tools",
  description: "Make cash a splash；Simple gains, no pains；Easy cash, no clash.",
};

export default function RootLayout({
  children,
  // modal,
  // overview,
}: Readonly<{
  children: React.ReactNode;
  // modal: React.ReactNode;
  // overview:  React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script id="flexible" dangerouslySetInnerHTML={{ __html: `
            (function (doc, win) {
    var docEL = document.documentElement,
      resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
      recalc = function () {
        // 获取当前设备的宽度
        var clientWidth = docEL.clientWidth;
        var fontSize;
        if (!clientWidth) return;
        if (clientWidth > 750) {
          //宽度大于750，根元素字体大小不能超过100px（不能大于设计稿的最大宽度）
          // docEL.style.fontSize = "100px"; //设置根元素大小
          docEL.style.fontSize = "16px";
          docEL.style.setProperty('--tpx', '0.0625rem');
        } else {
          fontSize = (clientWidth / 750) * 100
          // docEL.style.fontSize = fontSize + "px";
          docEL.style.fontSize = "16px";
          docEL.style.setProperty('--tpx', (1/fontSize).toFixed(5) + "rem");
        }
      };
    if (!doc.addEventListener) return;
    //添加窗口变动监听
    win.addEventListener(resizeEvt, recalc, false);
    //dom加载的时候执行一次
    // doc.addEventListener("DOMContentLoaded", recalc, false);
    recalc();
  })(document, window);
  
  
          ` }} strategy="beforeInteractive">
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {modal} */}
        {children}
        {/* {overview} */}
      </body>
    </html>
  );
}
