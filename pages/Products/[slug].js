import React, { useRouter } from "next/router";

const AllProducts = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router.query);

  return (
    <div>
      <h1>{slug} page</h1>
      <p>Home/products/{slug}</p>
    </div>
  );
};

export default AllProducts;
