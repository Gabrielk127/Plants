import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ViewStyle,
    StyleProp,
} from "react-native";
import Button from "./Button";

interface GlassCardProps {
    title: string;
    description: string;
    image?: number;
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
}

const GlassCard: React.FC<GlassCardProps> = ({
    title,
    description,
    image,
    width = 155,
    height = 200,
    style,
}) => {
    return (
        <View style={[styles.card, { width, height }, style]}>
            {image && <Image style={[styles.image]} source={image} />}
            <View style={styles.overlay} />
            <View style={styles.container}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Button />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
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
    container: {
        paddingTop: 110,
        paddingBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
    },
    description: {
        fontSize: 10,
        color: "#fff",
    },
    image: {
        position: "absolute",
        width: 180,
        height: 180,
        top: "-30%",
        right: "-10%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.04)", // Cor semi-transparente para o efeito de blur
        zIndex: -1,
    },
});

export default GlassCard;
