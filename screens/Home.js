import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ProductCard from "../components/ProductCard";
import { products } from "../db/products";

function Home({ navigation }) {
  const [searchInput, setSearchInput] = useState("");

  const categories = [
    {
      label: "Fast Food",
      icon: <Ionicons name="fast-food" size={24} color="#333" />,
    },
    {
      label: "Tea",
      icon: <FontAwesome5 name="mug-hot" size={24} color="#333" />,
    },
    {
      label: "Clothes",
      icon: <FontAwesome5 name="tshirt" size={24} color="#333" />,
    },
    {
      label: "Grocery",
      icon: <FontAwesome5 name="shopping-basket" size={24} color="#333" />,
    },
    {
      label: "Fast Food",
      icon: <Ionicons name="fast-food" size={24} color="#333" />,
    },
    {
      label: "Tea",
      icon: <FontAwesome5 name="mug-hot" size={24} color="#333" />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headTitle}>Hey Mubashir 👋</Text>
        <View style={styles.searchField}>
          <TextInput
            placeholder="Search your products"
            style={styles.searchInput}
            value={searchInput}
            onChangeText={(value) => setSearchInput(value)}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("products", {
                searchInput: searchInput,
              })
            }
          >
            <Feather name="search" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categoriesBlock}>
        <Text style={styles.cataTitle}>Top Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {categories.map((item, index) => (
            <View key={index} style={styles.category}>
              <View style={styles.cataIcon}>{item.icon}</View>
              <Text style={styles.cataLabel}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.topProducts}>
        <Text style={styles.cataTitle}>Top Products</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {products.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  header: {
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
  headTitle: {
    fontSize: 24,
    fontFamily: "Bold",
    marginBottom: 12,
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
    paddingVertical: 10,
    flex: 1,
  },
  categoriesBlock: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
  },
  cataTitle: {
    fontSize: 20,
    fontFamily: "Bold",
    marginBottom: 20,
  },
  category: {
    alignItems: "center",
    marginRight: 25,
  },
  cataIcon: {
    height: 54,
    width: 54,
    backgroundColor: "#e2e2e2",
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cataLabel: {
    fontSize: 15,
    fontFamily: "Regular",
  },
  topProducts: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
});
