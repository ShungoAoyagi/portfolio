import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "../src/messages/en.json";
import jaMessages from "../src/messages/ja.json";
import "../src/app/globals.css";

const messagesByLocale: Record<string, any> = {
  en: enMessages,
  ja: jaMessages,
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#000000",
        },
      ],
    },
  },
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Internationalization locale",
      defaultValue: "ja",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "ja", title: "日本語" },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { locale } = context.globals;
      const messages = messagesByLocale[locale] || messagesByLocale.ja;

      return (
        <div className="bg-background text-foreground min-h-screen p-4">
          <div className="mb-4 text-sm text-gray-500">
            <div>
              デバッグ:{" "}
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                赤背景
              </span>
            </div>
            <div>
              CSS変数:{" "}
              <span
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
                className="px-2 py-1 rounded"
              >
                プライマリ
              </span>
            </div>
          </div>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Story />
          </NextIntlClientProvider>
        </div>
      );
    },
  ],
};

export default preview;
