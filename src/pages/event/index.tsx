import Navigation from "@/@shared/layout/Navigation";

/**
 * @description SSR
 */
export default function EventPage() {
  return (
    <Navigation>
      <p>Event</p>
    </Navigation>
  );
}

export async function getServerSideProps() {
  return { props: {} };
}
