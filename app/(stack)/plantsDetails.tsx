import CustomTitle from "@/components/atoms/CustomTitle";
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function PlantsDetails() {
    return (
        <View>
            <ImageBackground
                style={styles.BackgroundImage}
                source={require("@/assets/images/background.png")}
                blurRadius={10}
            >
                <View style={styles.title}>
                    <CustomTitle title="Details" fontSize={32} />
                </View>
                <ScrollView>
                    <View style={styles.container}>
                        <Image
                            style={styles.image}
                            source={require("@/assets/images/plant4.png")}
                        />
                        <View style={styles.content}>
                            <CustomTitle fontSize={20} title="Calathea Plant" />

                            <Text style={styles.customText}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam,
                            </Text>

                            <Text style={styles.customText}>Price: $28,99</Text>
                            <Text style={styles.customText}>Size: 28cm</Text>
                            <Text style={styles.customText}>
                                Obs: This plant does best in a yard that
                                receives sun most of the day
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    BackgroundImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    title: {
        paddingTop: 28,
        alignItems: "center",
        borderBottomWidth: 4,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 48,
        borderBottomColor: "#55B000",
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 200,
        height: "100%",
        position: "relative",
        backgroundColor: "rgba(69, 73, 69, 0.2)",
        borderRadius: 16,
        marginHorizontal: 8,
        paddingHorizontal: 12,
        paddingBottom: 14,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.2)",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        overflow: "visible",
    },
    image: {
        width: 200,
        height: 400,
        marginTop: -200,
    },
    content: {
        marginTop: -50,
        flexDirection: "column",
        gap: 24,
    },
    customText: {
        fontSize: 14,
        textAlign: "justify",
        color: "#fff",
    },
});
