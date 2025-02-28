import { getReviews } from "@/server/getReviews";
import HomeClient from "@/components/HomeClient";

interface HomeProps {
  params: Promise<{
    lang: string;
  }>;
}

interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const reviews = await getReviews(lang);
  const transformedReviews: Review[] = reviews.map((review) => ({
    ...review,
    author_url: review.author_url || "",
    original_language: review.language || "fr",
    translated: false,
    time: Number(review.time),
  }));

  return <HomeClient reviews={transformedReviews} lang={lang} />;
}
