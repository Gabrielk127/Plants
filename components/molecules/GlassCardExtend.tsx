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
import BackgroundCard from "../atoms/BackgroundCard";
import { Link } from "expo-router";

interface GlassCardProps {
    title: string;
    description: string;
    descriptionTwo: string;
    image?: number;
    width?: number;
    height?: number;
    style?: StyleProp<ViewStyle>;
}

const GlassCardExtend: React.FC<GlassCardProps> = ({
    title,
    description,
    descriptionTwo,
    image,
    width = 155,
    height = 200,
    style,
}) => {
    return (
        <View style={[styles.card, { width, height }, style]}>
            <BackgroundCard>
                {/* Novo contêiner View envolvendo o conteúdo e o botão */}
                <View style={styles.contentContainer}>
                    <View style={styles.main}>
                        {image && (
                            <Image style={[styles.image]} source={image} />
                        )}
                        <View style={styles.overlay} />
                        <View style={styles.container}>
                            <View>
                                <Text style={styles.description}>
                                    {description}
                                </Text>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            <Text style={styles.descriptionTwo}>
                                {descriptionTwo}
                            </Text>
                        </View>
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
    main: {
        flexDirection: "row",
    },
    contentContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    container: {
        paddingTop: 40,
        width: 150,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#fff",
        width: 160,
    },
    description: {
        fontSize: 10,
        color: "#fff",
    },
    descriptionTwo: {
        fontSize: 10,
        color: "#fff",
    },
    image: {
        position: "absolute",
        width: 220,
        height: 220,
        top: "-45%",
        right: "-15%",
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

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.04)", // Cor semi-transparente para o efeito de blur
        zIndex: -1,
    },
});

export default GlassCardExtend;
