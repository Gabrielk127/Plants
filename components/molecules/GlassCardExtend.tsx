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

const GlassCardExtend: React.FC<GlassCardProps> = ({
    title,
    description,
    image,
    width = 155,
    height = 200,
    style,
}) => {
    return (
        <View style={[styles.card, { width, height }, style]}>
            <View style={styles.main}>
                {image && <Image style={[styles.image]} source={image} />}
                <View style={styles.overlay} />
                <View style={styles.container}>
                    <View>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <Button />
                </View>
            </View>
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
    main: {
        flexDirection: "row",
    },
    container: {
        paddingTop: 40,
        paddingBottom: 10,
        width: 150,
        gap: 24,
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
        width: 220,
        height: 220,
        top: "-30%",
        right: "-15%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.04)", // Cor semi-transparente para o efeito de blur
        zIndex: -1,
    },
});

export default GlassCardExtend;
