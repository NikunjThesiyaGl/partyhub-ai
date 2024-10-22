import ComingSoon2 from "@/components/templates/ComingSoon2";
import { metaSeoFields } from "@/utils";

export async function generateMetadata() {
  const metaData = metaSeoFields({
    title: "PartyHub - Get Ready to Celebrate | Coming Soon",
    pageTitle: "Coming Soon - PartyHub",
    description: "Big things are coming! PartyHub is launching soon to make planning your perfect party fun and easy. Stay tuned—we’re almost ready to party with you!"
  });
  return metaData;
}

export default function Home() {
  return (
    <>
      <ComingSoon2/>
    </>
  );
}
