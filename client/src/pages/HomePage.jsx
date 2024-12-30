import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // console.log(products);
  return (
    <Container maxW={"container.x1"} py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient="linear(to-l,rgb(29, 1, 151),rgb(82, 0, 189))"
          bgClip="text"
          textTransform={"uppercase"}
          textAlign={"center"}
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
        >
          Current Product 🚀
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            color={"gray.500"}
            textAlign={"center"}
            fontSize={"x1"}
            fontWeight={"bold"}
          >
            No product Found😒{" "}
            <Link to={"/create"}>
              <Text
                as={"span"}
                color={"blue.500"}
                _hover={{ textDecoration: "underline" }}
              >
                Create a new Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default HomePage;
