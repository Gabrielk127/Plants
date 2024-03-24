import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ViewStyle,
    StyleProp,
    ImageSourcePropType,
    TouchableOpacity,
} from "react-native";
import Button from "./Button";
import BackgroundCard from "../atoms/BackgroundCard";
import { Link } from "expo-router";

interface GlassCardProps {
    title: string;
    description: string;
    image?: ImageSourcePropType;
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
}

const GlassCard: React.FC<GlassCardProps> = ({
    title,
    description,
    image,
    width = 170,
    height = 200,
    style,
}) => {
    return (
        <View style={[styles.card, { width, height }, style]}>
            <BackgroundCard>
                {image && <Image style={[styles.image]} source={image} />}
                <View style={styles.overlay} />
                <View style={styles.container}>
                    <View>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <Link style={styles.button} href="/(stack)/plantsDetails">
                        <Text style={styles.titleButton}>Details</Text>
                    </Link>
                </View>
            </BackgroundCard>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {},
    container: {
        flexDirection: "column",
        gap: 12,
        paddingTop: 100,
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
    button: {
        borderWidth: 0.4,
        borderColor: "#fff",
        borderRadius: 12,
        alignItems: "center",
        paddingVertical: 4,
        textAlign: "center",
    },
    titleButton: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
    },
});

export default GlassCard;
