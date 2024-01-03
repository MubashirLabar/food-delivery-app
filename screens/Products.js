import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
} from "react-native";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../db/products";
import Feather from "react-native-vector-icons/Feather";

export default function Products({ route }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (route?.params?.searchInput) {
      setInput(route?.params?.searchInput);
    }
  }, [route]);

  const filteredProducts = useMemo(() => {
    return products.filter((x) =>
      x.name.toLowerCase().includes(input.toLowerCase())
    );
  }, [route, input]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.head}>
        <View style={styles.searchField}>
          <TextInput
            placeholder="Search your products"
            style={styles.searchInput}
            value={input}
            onChangeText={(value) => setInput(value)}
          />
          <Feather name="search" size={24} />
        </View>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar />
        {filteredProducts.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.height,
    padding: 20,
  },
  head: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  searchField: {
    backgroundColor: "#e2e2e2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  searchInput: {
    fontSize: 15,
    fontFamily: "Regular",
    paddingVertical: 9,
    flex: 1,
  },
});
