import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import Reviews from "../../component/pages/Reviews/Reviews";
import reviewsData from "../../utils/reviewsData";
import { useDispatch } from "react-redux";
import { addItem } from "../../state/cart/cartSlice";
import { Link, useParams } from "react-router-dom";
import { toggleCart } from "../../state/cartToggle/cartToggleSlice";
import LoadingBar from "react-top-loading-bar";
import { IoStarSharp } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { SiSpringsecurity } from "react-icons/si";
import gpay from "../../images/GooglePay.svg";
import paypal from "../../images/PayPal.svg";
import visa from "../../images/Visa.svg";
import mastercard from "../../images/Mastercard.svg";
import amex from "../../images/Amex.svg";
import apple from "../../images/ApplePay.svg";
import SubscribeEmail from "../../component/pages/SubscribeEmail/SubscribeEmail";
import RecommendedProducts from "../../component/pages/RecommendedProducts/RecommmendedProducts";
import products from "../../utils/productsBelts";
import { Product } from "../../utils/productInterface";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const paymentMethodImages = [gpay, paypal, visa, mastercard, amex, apple];

const ProductPage: React.FC = () => {
  const [loading, setLoading] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    // Find the product by productID from the URL params
    const productID = params.id;
    const foundProduct = products.find(
      (product) => product.productID === productID
    );
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Handle case where product is not found
      console.error(`Product with ID ${productID} not found.`);
    }
  }, [params.id]);

  if (!product) {
    // Render loading state or error message
    return <div>Loading...</div>;
  }

  const handleAddToCart = async () => {
    setLoading(30); // Start loading animation

    // Simulate an asynchronous operation (e.g., API request)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dispatch the action to add to cart
    dispatch(
      addItem({
        id: product?.productID,
        name: product?.productName,
        price: product?.productPrice,
        imageUrl: product?.productImage,
        quantity: 1,
      })
    );

    setLoading(100); // Complete loading animation

    // Toggle the cart
    dispatch(toggleCart());
  };

  const handleStripePayment = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51Oqev2Jt3qytHQNKncRTiT57POkwRtlWAM5rbhqomOYskX7a4xMiX2ppFjpfVsRIgTnrMxhYBeQJ3KBAU3MiR9DM00kmZSZXrd"
      );

      const body = {
        products: cart.items,
        totalAmount: cart.totalPrice,
      };

      const headers = { "Content-Type": "application/json" };

      const response = await fetch(
        `https://beltwrestle-api.co.uk/api/v1/stripe-checkout`,
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to initiate Stripe session");
      }

      const session = await response.json();

      if (!session || !session.id) {
        throw new Error("Invalid response from server");
      }

      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result && result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error("Stripe Payment Error:", error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="w-11/12">
          <div className="flex md:flex-row flex-col md:gap-10 gap-6 mt-8">
            <div className="md:w-1/2">
              <img
                src={product.productImage}
                alt="product"
                className="w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-3">
              <h1 className="text-3xl font-bold">{product.productName}</h1>
              <h3 className="text-xl font-semibold">
                {product.productSubtitle}
              </h3>
              <div className="flex gap-1 items-center">
                <IoStarSharp className="text-xs text-yellow-500" />
                <IoStarSharp className="text-xs text-yellow-500" />
                <IoStarSharp className="text-xs text-yellow-500" />
                <IoStarSharp className="text-xs text-yellow-500" />
                <IoStarSharp className="text-xs text-yellow-500" />
                <span className="text-xs">(4.6/5.0 rating)</span>
              </div>
              <span className="text-2xl underline">
                Price: £{product.productPrice}
              </span>
              <div className="flex gap-3 justify-center items-center border-[1px] border-black p-2 w-[100px]">
                {quantity === 1 ? (
                  <button disabled onClick={() => setQuantity(quantity - 1)}>
                    <FiMinus className="text-xl" />
                  </button>
                ) : (
                  <button onClick={() => setQuantity(quantity - 1)}>
                    <FiMinus className="text-xl" />
                  </button>
                )}
                <span className="font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>
                  <IoMdAdd className="text-xl" />
                </button>
              </div>
              <div className="md:flex block gap-4">
                <button
                  className="bg-[#379237] text-white text-sm font-semibold md:w-1/2 w-full my-2 px-3 py-3 hover:scale-105 transition-transform flex justify-center items-center gap-2"
                  onClick={handleAddToCart}
                >
                  <SlBag className="text-white" />
                  <span>Add to cart</span>
                </button>
                <button
                  onClick={handleStripePayment}
                  className="bg-[#0A1D56] text-white text-sm font-semibold md:w-1/2 w-full my-2 px-3 py-3 hover:scale-105 transition-transform"
                >
                  Checkout
                </button>
              </div>
              <div className="border-[1px] border-solid border-gray-200 rounded p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Payment & Security</h3>
                  <SiSpringsecurity className="text-sky-900 text-xl" />
                </div>
                <div className="flex md:gap-1 gap-0">
                  {paymentMethodImages.map((method, index) => (
                    <img
                      key={index}
                      src={method}
                      className="md:w-[68px] md:h-[48px] w-1/6 h-auto"
                      alt="paymentMethod"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-xs">
                  Your payment information is processed securely. We do not
                  store credit card details nor have access to your credit card
                  information.
                </p>
              </div>
              <div className="bg-gray-100 rounded py-8 px-4">
                <div className="flex items-center gap-3">
                  <TbTruckDelivery className="text-2xl" />
                  <p className="text-xs font-bold">
                    Please note that delivery times for our products range from
                    7 to 14 days. We appreciate your patience and understanding.
                  </p>
                </div>
                <br />
                <div className="flex items-end gap-3">
                  <p className="text-xs font-semibold">T&C's apply </p>
                  <Link
                    to={"/policies/shipping-policy"}
                    className="text-xs underline hover:text-blue-400"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="my-2 py-2">
            {product.productDescription.length === 0 ? (
              <></>
            ) : (
              <>
                <h1 className="text-2xl font-bold">Product Description</h1>
                <p className="text-md py-2 my-2">
                  {product.productDescription}
                </p>
              </>
            )}
          </div>
          <RecommendedProducts />
          <div className="grid md:grid-cols-3">
            {reviewsData.slice(0, 3).map((review, index) => (
              <Reviews
                key={index}
                imageUrl={review.imageUrl}
                name={review.name}
                date={review.date}
                review={review.review}
              />
            ))}
          </div>
        </div>
      </div>
      <SubscribeEmail />
      <LoadingBar color="#379237" progress={loading} height={7} />
    </Layout>
  );
};

export default ProductPage;
