import {
    View,
    ImageSourcePropType,
    Image,
    StyleSheet,
    Text,
} from "react-native";
import BackgroundCard from "../atoms/BackgroundCard";
import { Star } from "phosphor-react-native";

interface ReviewCardProps {
    title: string;
    description: string;
    image: ImageSourcePropType;
}

const ReviewCard = ({ title, description, image }: ReviewCardProps) => {
    return (
        <View>
            <View style={styles.card}>
                <BackgroundCard>
                    <View style={styles.cardContent}>
                        <View style={styles.groupTitle}>
                            {image && (
                                <Image style={[styles.image]} source={image} />
                            )}
                            <View style={styles.groupTitleStar}>
                                <Text style={styles.title}>{title}</Text>
                                <View style={styles.stars}>
                                    <Star
                                        size={14}
                                        weight="fill"
                                        color="#FFF84E"
                                    />
                                    <Star
                                        size={14}
                                        weight="fill"
                                        color="#FFF84E"
                                    />
                                    <Star
                                        size={14}
                                        weight="fill"
                                        color="#FFF84E"
                                    />
                                    <Star
                                        size={14}
                                        weight="fill"
                                        color="#FFF84E"
                                    />
                                    <Star
                                        size={14}
                                        weight="fill"
                                        color="#FFF84E"
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.description}>{description}</Text>
                    </View>
                </BackgroundCard>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 250,
        height: 280,
    },
    cardContent: {
        paddingHorizontal: 6,
        paddingVertical: 14,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    groupTitle: {
        flexDirection: "row",
        gap: 12,
        maxWidth: 150,
        textAlign: "center",
        alignItems: "center",
    },
    groupTitleStar: {
        flexDirection: "column",
        gap: 4,
    },
    title: {
        flexWrap: "wrap",
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    stars: {
        flexDirection: "row",
        gap: 6,
    },
    description: {
        paddingTop: 14,
        textAlign: "justify",
        color: "#c9c4c4",
    },
});

export default ReviewCard;
