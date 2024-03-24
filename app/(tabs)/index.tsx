import CustomTitle from "@/components/atoms/CustomTitle";
import GlassCard from "@/components/molecules/GlassCard";
import GlassCardExtend from "@/components/molecules/GlassCardExtend";

import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function TabOneScreen() {
    // Dados para serem listados pelo FlatList
    const data = [
        {
            key: "1",
            description: "Trendy House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant4.png"),
        },
        {
            key: "2",
            description: "Trendy House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant1.png"),
        },
        {
            key: "3",
            description: "Trendy House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant5.png"),
        },
        {
            key: "4",
            description: "Trendy House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant2.png"),
        },
    ];

    // Função para renderizar cada item
    const renderItem = ({ item }) => (
        <GlassCard
            description={item.description}
            title={item.title}
            image={item.image}
        />
    );

    return (
        <ImageBackground
            source={require("@/assets/images/background.png")}
            style={styles.Image}
            resizeMode="cover"
            blurRadius={4}
        >
            <View style={styles.container}>
                <View style={styles.titleNav}>
                    <CustomTitle fontSize={32} title="Breath Natureal" />
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet,
                    </Text>
                </View>
                <ScrollView>
                    <View style={styles.cards}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            numColumns={2}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingVertical: 42,
                                gap: 48,
                            }}
                        />
                    </View>

                    <View style={styles.cardExtend}>
                        <View style={styles.titleBest}>
                            <CustomTitle title="Best Plants" fontSize={24} />
                        </View>
                        <ScrollView
                            horizontal
                            contentContainerStyle={{
                                paddingVertical: 32,
                                paddingHorizontal: 8,
                            }}
                        >
                            <GlassCardExtend
                                width={330}
                                title="Plant number one"
                                description="Calathea Plant"
                                image={require("@/assets/images/plant1.png")}
                            />
                            <GlassCardExtend
                                width={330}
                                title="Plant number two"
                                description="Calathea Plant"
                                image={require("@/assets/images/plant2.png")}
                            />
                            <GlassCardExtend
                                width={330}
                                title="Plant number three"
                                description="Calathea Plant"
                                image={require("@/assets/images/plant5.png")}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 24,
        paddingLeft: 24,
    },
    Image: {
        width: "100%",
        height: "100%",
    },
    titleNav: {
        paddingTop: 38,
        paddingLeft: 12,
        paddingBottom: 54,
    },
    description: {
        paddingLeft: 5,
        color: "#fff",
    },
    cards: {
        alignItems: "center",
        justifyContent: "center",
    },
    cardExtend: {
        paddingVertical: 48,
        justifyContent: "center",
        alignItems: "center",
    },
    titleBest: {
        marginBottom: 26,
        borderBottomWidth: 4,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 48,
        borderBottomColor: "#55B000",
    },
});
