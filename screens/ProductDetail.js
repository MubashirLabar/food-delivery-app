import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { products } from "../db/products";

export default function ProductDetail({ route, navigation }) {
  const [qty, setQty] = useState(1);
  const [productDetail, setProductDetail] = useState(null);

  const handlePlusButton = () => {
    setQty(qty + 1);
  };

  const handleMinusButton = () => {
    setQty(qty - 1);
  };

  useEffect(() => {
    const product = products.find((x) => x.id === route.params.id);
    setProductDetail(product);
  }, [route]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <Image source={productDetail?.image} style={styles.image} />
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{productDetail?.name}</Text>
          <Text style={styles.price}>{`PKR ${productDetail?.price}`}</Text>
          <View style={styles.counterBlock}>
            <View style={styles.counter}>
              <TouchableOpacity
                style={styles.counterBtn}
                disabled={qty === 1}
                onPress={() => handleMinusButton()}
              >
                <Feather name="minus" color="#000" size={24} />
              </TouchableOpacity>
              <Text style={styles.qty}>{qty}</Text>
              <TouchableOpacity
                style={styles.counterBtn}
                onPress={() => handlePlusButton()}
              >
                <Feather name="plus" color="#000" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.estimate}>{`Est. Total: PKR ${
              qty * productDetail?.price
            }`}</Text>
          </View>
          <View style={styles.desBlock}>
            <Text style={styles.desTitle}>Description</Text>
            <Text style={styles.description}>{productDetail?.desc}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.btnLabel}>{`Add ${qty} to basket`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    backgroundColor: "#e2e2e2",
  },
  backBtn: {
    position: "absolute",
    top: 12,
    left: 22,
    backgroundColor: "#fff",
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 220,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    color: "#000",
    fontFamily: "SemiBold",
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontFamily: "Regular",
    color: "#333",
    marginBottom: 25,
  },
  counterBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  counter: {
    backgroundColor: "#e2e2e2",
    flexDirection: "row",
    borderRadius: 20,
  },
  counterBtn: {
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  qty: {
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  estimate: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Medium",
  },
  desBlock: {},
  desTitle: {
    fontSize: 24,
    fontFamily: "SemiBold",
    color: "#000",
    marginBottom: 12,
  },
  description: {
    fontFamily: "Regular",
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  footer: {
    height: 72,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  cartBtn: {
    backgroundColor: "#000",
    height: 48,
    borderRadius: 25,
    alignContent: "center",
    justifyContent: "center",
  },
  btnLabel: {
    fontSize: 15,
    fontFamily: "SemiBold",
    color: "#fff",
    textAlign: "center",
  },
});
