"use client";

import FeaturedPost from "@/components/HomePage/FeaturedPost";
import FollowUs from "@/components/HomePage/FollowUs";
import HeroPage from "@/components/HomePage/HeroPage";
import PopulerPost from "@/components/HomePage/PopulerPost";
import { useGlobalStateContext } from "@/contexts/GlobalProviderContext";

export default function Home() {
  const { blogs } = useGlobalStateContext();
  return (
    <>
      <HeroPage />
      <FeaturedPost blogs={blogs} />
      <FollowUs />
      <PopulerPost blogPopuler={blogs} />
    </>
  );
}
