import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chruger No.10 - Delicious Food & Wonderful Dining Experience",
  description:
    "Inspired by travel and love for different cultures, Chruger No:10 offers homemade delicacies made from fresh ingredients in the heart of Vienna.",
  keywords:
    "restaurant, Vienna, Austrian cuisine, tacos, burritos, fresh ingredients, dining",
  openGraph: {
    title: "Chruger No.10 - Authentic Restaurant in Vienna",
    description:
      "Experience delicious homemade food and a cozy atmosphere at Chruger No.10 in Vienna's historic Krugerstraße.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
