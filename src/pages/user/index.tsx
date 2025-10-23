import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/user/userinfo",
      permanent: false,
    },
  };
};

export default function UserIndex() {
  return null;
}
