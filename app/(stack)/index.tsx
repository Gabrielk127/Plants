import CustomTitle from "@/components/atoms/CustomTitle";
import GlassCard from "@/components/molecules/GlassCard";
import GlassCardExtend from "@/components/molecules/GlassCardExtend";
import ReviewCard from "@/components/molecules/ReviewCard";

import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    ImageSourcePropType,
} from "react-native";

interface itemData {
    key: string;
    description: string;
    title: string;
    image: ImageSourcePropType;
}

export default function TabOneScreen() {
    // Dados para serem listados pelo FlatList

    const data: itemData[] = [
        {
            key: "1",
            description: "House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant4.png"),
        },
        {
            key: "2",
            description: "House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant1.png"),
        },
        {
            key: "3",
            description: "House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant5.png"),
        },
        {
            key: "4",
            description: "House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant2.png"),
        },
        {
            key: "5",
            description: "House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant6.png"),
        },
        {
            key: "5",
            description: "House Plant",
            title: "Calathea plant",
            image: require("@/assets/images/plant3.png"),
        },
    ];

    // Função para renderizar cada item
    const renderItem = ({ item }: { item: itemData }) => (
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
                                paddingVertical: 46,
                                gap: 56,
                            }}
                        />
                    </View>

                    <View style={styles.content}>
                        <View style={styles.cardExtend}>
                            <View style={styles.titles}>
                                <CustomTitle
                                    title="Best Plants"
                                    fontSize={24}
                                />
                            </View>
                            <ScrollView
                                horizontal
                                contentContainerStyle={{
                                    paddingVertical: 56,
                                    paddingHorizontal: 8,
                                }}
                            >
                                <GlassCardExtend
                                    width={330}
                                    title="Plant number one"
                                    description="Calathea Plant"
                                    descriptionTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    image={require("@/assets/images/plant1.png")}
                                />
                                <GlassCardExtend
                                    width={330}
                                    title="Plant number two"
                                    description="Calathea Plant"
                                    descriptionTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    image={require("@/assets/images/plant2.png")}
                                />
                                <GlassCardExtend
                                    width={330}
                                    title="Plant number three"
                                    description="Calathea Plant"
                                    descriptionTwo="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    image={require("@/assets/images/plant5.png")}
                                />
                            </ScrollView>
                        </View>

                        <View style={styles.cardExtend}>
                            <View style={styles.titles}>
                                <CustomTitle
                                    title="Costumer Review"
                                    fontSize={24}
                                />
                            </View>

                            <ScrollView horizontal>
                                <ReviewCard
                                    image={require("@/assets/images/eu.png")}
                                    title="Gabriel Fernandes"
                                    description="Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam,"
                                />
                                <ReviewCard
                                    image={require("@/assets/images/eu.png")}
                                    title="Gabriel Fernandes"
                                    description="Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam,"
                                />
                                <ReviewCard
                                    image={require("@/assets/images/eu.png")}
                                    title="Gabriel Fernandes"
                                    description="Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam,"
                                />
                                <ReviewCard
                                    image={require("@/assets/images/eu.png")}
                                    title="Gabriel Fernandes"
                                    description="Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam,"
                                />
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Image: {
        width: "100%",
        height: "100%",
    },
    titleNav: {
        paddingTop: 38,
        paddingLeft: 32,
        paddingBottom: 32,
    },
    description: {
        paddingLeft: 5,
        color: "#fff",
    },
    cards: {
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        backgroundColor: "#1B2316",
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
    },
    cardExtend: {
        paddingBottom: 48,
        justifyContent: "center",
        alignItems: "center",
    },
    titles: {
        paddingTop: 24,
        marginBottom: 32,
        borderBottomWidth: 4,
        borderBottomLeftRadius: 44,
        borderBottomRightRadius: 48,
        borderBottomColor: "#55B000",
    },
});
