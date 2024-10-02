import React, { useRouter } from "next/router";

const AllServices = () => {
  const router = useRouter();
  const { slug } = router.query;
  //   console.log(router.query);

  return (
    <div>
      <h1>{slug} page</h1>
      <p>Home/services/{slug}</p>
    </div>
  );
};

export default AllServices;
