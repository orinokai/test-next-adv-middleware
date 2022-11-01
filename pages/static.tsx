const Page = ({ message }: { message: string }) => {
  return (
    <div>
      <h1 id="message">{message}</h1>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      message: "This is a static page — and now this is a prop!",
    },
  };
}

export default Page;
